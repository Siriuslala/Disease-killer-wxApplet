// pages/category/category.js
var app = getApp();
Page({
    data: {
        //初始化按钮都是无效的，只有登录后才使能
        stu_button_state: true, 
        doc_button_state: true,
    },

    goStu: function() {
        wx.navigateTo({
            url:'/pages/cure/askCure/askCure'   
        })
   
    },
    goDoc: function() {
        wx.navigateTo({
            url:'/pages/cure/answerCure/answerCure'
        })
        
    },

    onLoad: function (options) {
        var _this = this;
        //登录状态为学生，问诊按钮使能
        if(app.globalData.user_identity == 0){
            _this.setData({
                stu_button_state: false
            })
        }
         //登录状态为医生，诊断按钮使能
        if(app.globalData.user_identity == 1){
            _this.setData({
                doc_button_state: false
            })
        }
        if(app.globalData.user_login_state == false){
            _this.setData({
                stu_button_state: true,
                doc_button_state: true,
            })
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var _this = this;
        //登录状态为学生，问诊按钮使能
        if(app.globalData.user_identity == 0){
            _this.setData({
                stu_button_state: false,
                doc_button_state:true,
            })
        }
         //登录状态为医生，诊断按钮使能
        if(app.globalData.user_identity == 1){
            _this.setData({
                stu_button_state: true,
                doc_button_state: false,
            })
        }
        if(app.globalData.user_login_state == false){
            _this.setData({
                stu_button_state: true,
                doc_button_state: true,
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