// pages/home/schoolInfo.js
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        data:["5月11日“关于校医院开放小门诊的通知”",
            "4月26日“关于开展核酸检测的通知”",
            "4月23日“关于开展加强针疫苗补种工作的通知”",
            "（2021）12月1日“关于沙河门诊报销的通知”",
            "",],
    },
    
    goshow_schoolInfo: function(e) {
        wx.navigateTo({
            url:'/pages/home/schoolInfo/show_schoolInfo/show_schoolInfo'
        })
        // 跳转时，把循环渲染的校医院讯息的日期放入本地缓存
        wx.setStorage({
            key:"date",
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