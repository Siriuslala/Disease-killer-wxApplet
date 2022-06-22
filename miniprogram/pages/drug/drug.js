// pages/xitong/xitong.js
var app = getApp()
Page({
    data: {
      find_button_state: true,
      find_button_state: true,
    },
    
    //跳转
    go_find: function () {
      wx.navigateTo({
        url: '/pages/drug/find/find'
      })
    },
    go_new: function () {
      wx.navigateTo({
        url: '/pages/drug/new/new'
      })
    },
  
    /**
     * 页面的初始数据
     */
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var _this = this;
      //登录状态为学生，问诊按钮使能
      if(app.globalData.user_identity == 0){
          _this.setData({
              find_button_state: false,
              new_button_state:true,
          })
      }
       //登录状态为医生，诊断按钮使能
      if(app.globalData.user_identity == 1){
          _this.setData({
              find_button_state: false,
              new_button_state: false,
          })
      }
      if(app.globalData.user_login_state == false){
          _this.setData({
              find_button_state: false,
              new_button_state: true,
          })
      }
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
      //登录状态为学生，问诊按钮使能
      if(app.globalData.user_identity == 0){
          _this.setData({
              find_button_state: false,
              new_button_state:true,
          })
      }
       //登录状态为医生，诊断按钮使能
      if(app.globalData.user_identity == 1){
          _this.setData({
              find_button_state: false,
              new_button_state: false,
          })
      }
      if(app.globalData.user_login_state == false){
          _this.setData({
              find_button_state: false,
              new_button_state: true,
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