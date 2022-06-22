// pages/chaxun/chaxun.js
//查询界面
Page({
    data: {
      input:"", //搜索框输入
      drug:[], //从数据库获取药品信息
    },
  //药品搜索
    go_search(e) {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力') 
        } else {
        wx.cloud.init({
        traceUser: true, 
        }) 
        }

        var _this = this;
      //调用云函数
      wx.cloud.callFunction({   
        name: 'queryDrug',
        data: { 
        //输入药品名称
        drugname: e.detail.value.input_drug,
        },
        
        success: function (res) {
        console.log(res.result)
        _this.setData({
        input:"", //更新成功后清空输入框的值
        drug: res.result.data,    
        }) //setData
       },//success
       fail:console.error
        })
        
    },
  
    go_back: function () {
      wx.switchTab({  //若要返回主页，则需用switchTab
        url: '/pages/drug/drug'
      })
    },
    go_drug_content: function (e) {
      wx.navigateTo({
        url: '/pages/drug/drug_content/drug_content'
      })
      //跳转前将药品名放入本地缓存
      wx.setStorage({
        key:"drugname",
        data:e.currentTarget.dataset.id, //js从wxml获取变量的方法
    })
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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