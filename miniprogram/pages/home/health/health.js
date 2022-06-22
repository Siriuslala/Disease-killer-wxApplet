// pages/home/health.js
Page({
    data: {
        data:["熬夜对人体的危害",
        "增肌与减脂的营养搭配",
        "颈椎锻炼方法"]
    },

    goshowhealth: function(e) {
        wx.navigateTo({
            url:'/pages/home/health/showhealth/showhealth'
        })
        // 跳转时，把循环渲染的健康讲堂的名字放入本地缓存
        wx.setStorage({
            key:"health",
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