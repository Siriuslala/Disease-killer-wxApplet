// pages/home/knowledge.js
Page({
    data: {
        data:["HPV疫苗介绍","CPR-心脏复苏术步骤详解"]
    },

    goshowknowledge: function(e) {
        wx.navigateTo({
            url:'/pages/home/knowledge/showknowledge/showknowledge'
        })
        // 跳转时，把循环渲染的医药科普的名字放入本地缓存
        wx.setStorage({
            key:"knowledge",
            data:e.currentTarget.dataset.id, //js从wxml获取变量的方法
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