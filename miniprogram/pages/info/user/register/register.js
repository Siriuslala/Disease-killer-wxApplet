// pages/info/register.js
var user_identity_id=""; //获取picker的id值
Page({
    data: {
        array: [
          {
            id: 0,
            identity: '学生'
          },
          {
            id: 1,
            identity: '医生'
          }       
        ],
        index: 0,
    },
 
    onLoad: function (options) {
      //获取picker的值
      //初始化
        var Index = this.data.index //Index获取当前界面的data里的picker索引
        user_identity_id = this.data.array[Index].id //初始化（id为初始索引:0）
    },
    bindPickerChange: function(e) {
      var i_id = this.data.array[e.detail.value].id //在函数里获取选择的索引
      user_identity_id = i_id //把获取到的索引值传给user_identity_id，通过user_identity_id将id值传出去
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
//********************************** */ 信息注册函数
      user_register(e){
        //通过ii_id获取刚开始定义的索引值
        var ii_id = user_identity_id;
        
        if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力') 
        } else {
        wx.cloud.init({
        traceUser: true, 
        }) 
        }
        
        //保存this变量 
        var _this = this; 
        //调用云函数
        wx.cloud.callFunction({   
        name: 'addDisease',
        data: { 
        user_name: e.detail.value.input_user_name,
        user_id: e.detail.value.input_user_id,
        user_code: e.detail.value.input_user_code,
        //获取picker的值
        user_identity: ii_id,
        },
        
        success: function (res) {
        console.log(res.result)
        //注册成功提示 
        wx.showToast({
          title: '注册成功',
        })
        //更新成功后清空输入框的值
        _this.setData({
           input:"",
        })
        },
        
        fail:console.error
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