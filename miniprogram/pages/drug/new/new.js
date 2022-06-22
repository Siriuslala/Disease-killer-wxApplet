// pages/xinjian/xinjian.js
const app = getApp()
Page({

  data: {
    input:"",
  },

  save:function(e){
    //上传药品信息至云端
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
      name: 'addDrug',
      data: { 
      drugname: e.detail.value.input_drugname,
      quality: e.detail.value.input_quality,
      type: e.detail.value.input_type,
      factory: e.detail.value.input_factory,
      origin: e.detail.value.origin,
      price: e.detail.value.price, 
      expdate: e.detail.value.expdate,
      },
      
      success: function (res) {
      console.log(res.result)
    
      //更新成功后清空输入框的值
      _this.setData({
         input:"",
      })
      },
      
      fail:console.error
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