// pages/cure/askCure/receiveCure.js
var app = getApp()
Page({
    data: {
        PSdata:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
             //************************ ，用于获取医生的回复
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
                name: 'queryCure',  
                data: {
                stu_id: app.globalData.user_id,
                },
                //回调函数
                success: function (res) {   
                console.log(res.result)
        
                _this.setData({ 
                PSdata: res.result.data[0].P_S_,//设置备注值                          
                })      
                },
                fail: console.error  
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