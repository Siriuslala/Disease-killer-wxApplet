// pages/neirong/neirong.js
//药品详情
var app = getApp()
const QR = require('../../../utils/weapp-qrcode.js'); // 引入 weapp-qrcode

Page({
    data: {
      data:"", //用于显示药品信息 
      input:"", //清空输入框
      confirm_button_state: true,   //未登录不能买东西   
      QrCodeURL:'', // 二维码图片路径
    },
    
   // 二维码
   drawImg: function (stu_id){
    let that = this,
        params = "该二维码所属学生：" + stu_id;  // 二维码参数 此处应注意，参数长度不可过短，长度为5时，二维码扫描出来为空白的。

    var imgData = QR.drawImg(params, {
        typeNumber: 4,          // 密度
        errorCorrectLevel: 'L', // 纠错等级
        size: 800,              // 白色边框
    })
    
    that.setData({
        QrCodeURL: imgData
    })
},


    onLoad: function (options) {
      //查询信息
      var _this = this;
       wx.getStorage({
            key:"drugname",
            success:function(res){
    //res即为缓存中的药品名
            if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
            } else { 
            wx.cloud.init({ 
            traceUser: true,
            })
            }    
            
            //调用云函数
            wx.cloud.callFunction({ 
            name: 'queryDrug',  
            data: {     
                drugname: res.data,  //res为getStorge回调函数的返回值
            },
            //queryDrug的 回调函数
            success: function (res) {   
            console.log(res.result)
            _this.setData({ 
            data: res.result.data[0],           
            })      
            }, 
            fail: console.error  
            })  
       } //(getStorge)success
      })// getStorge
      
    },

    //点击购买按钮后弹出确认提示框
    confirm:function(e){
      var _this = this;
      wx.showModal({
          title: '模拟支付确认',
          content: '确认购买吗？',
          success: function(res) {
              if (res.confirm) {
              console.log('用户点击确定')
                
              //1.上传订单
              wx.getStorage({
                key:"drugname",
                success:function(res){
        //res即为缓存中的药品名          
               if (!wx.cloud) {
                console.error('请使用 2.2.3 或以上的基础库以使用云能力')
                } else { 
                wx.cloud.init({ 
                traceUser: true,
                })
                }    
                wx.cloud.callFunction({ 
                  name: 'addDisease',  
                  data: {     
                      order_name: res.data, 
                      order_num: e.detail.value.input_num,
                      stu_id: app.globalData.user_id, 
                      is_order: 1,
                  },
                  //addDrug的 回调函数
                  success: function (res) {   
                  console.log(res.result)   
                  }, 
                  fail: console.error  
                  })  //云函数调用结束          
                 } //(getStorge)success                
                })// getStorge

                //2.生成二维码
                _this.drawImg(app.globalData.user_id);

                //清空输入框
                _this.setData({
                  input:"",
                })

                
              } 
              else if (res.cancel) {
              console.log('用户点击取消')
              }
          }
      })
  },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      var _this = this;
      //登录状态
      if(app.globalData.user_login_state == true){
          _this.setData({
              confirm_button_state: false,
          })
      }
 
      if(app.globalData.user_login_state == false){
          _this.setData({
              confirm_button_state: true,
          })
      }
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })