// pages/info.js
const app = getApp()
Page({
    data: {

    },
     go_feedback:function(){
            wx.navigateTo({
            url: '/pages/info/feedback/feedback',
            })
        },
    go_user:function(){
        wx.navigateTo({
        url: '/pages/info/user/user',
        })
    },
    go_cart:function(){
        wx.navigateTo({
        url: '/pages/info/cart/cart',
        })
    },
    
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
        var _this = this;
        if(app.globalData.user_login_state == false){
            _this.setData({
                feedback_button_state: true,
                cart_button_state: true,
            })
        }
        if(app.globalData.user_login_state == true){
            _this.setData({
                feedback_button_state: false,
                cart_button_state: false,
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