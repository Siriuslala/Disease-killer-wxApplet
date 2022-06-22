// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        /*广告滑动导航参数设置**/
        indicatorDots:true,
        autoplay:true,
        interval:2000,
        duration:1000,
        img:[
            {imgUrl:"homeImg/bupt.jpg", imgName:"bupt"},
            {imgUrl:"homeImg/virus.jpg", imgName:"virus"},{imgUrl:"homeImg/nucleic.jpg", imgName:"nucleic"},
        ],  
    },
    //顶部滑动广告的跳转
    goAd: function(e) {
        wx.navigateTo({
            url:'/pages/home/Ad/Ad'
        })
        // 跳转时，把循环渲染的图片的名字放入本地缓存
        wx.setStorage({
            key:"imgName",
            data:e.currentTarget.dataset.id, //js从wxml获取变量的方法
        })
    }, 
    //三个按钮的导航
    gohealth: function() {
        wx.navigateTo({
            url:'/pages/home/health/health'
        })
    }, 
    goknowledge: function() {
        wx.navigateTo({
            url:'/pages/home/knowledge/knowledge'
        })
    },
     goschoolInfo: function() {
        wx.navigateTo({
            url:'/pages/home/schoolInfo/schoolInfo'
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