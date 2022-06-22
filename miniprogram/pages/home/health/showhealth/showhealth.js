// pages/home/health/stayup.js
Page({
    data: {
        healthContent:"",
    },

    onLoad: function (options) {
        var _this = this;
        wx.getStorage({
            key:"health",
            success:function(res){
            //通过从缓存中获取的广告名称(res)来查询健康讲堂的数据
            if (!wx.cloud) {
                console.error('请使用 2.2.3 或以上的基础库以使用云能力')
                } else { 
                wx.cloud.init({ 
                traceUser: true,
                })
                }    
                
                //调用云函数
                wx.cloud.callFunction({ 
                name: 'queryInfo',  
                data: {     
                health: res.data,   //用回调函数的返回值
                },
                //query的 回调函数
                success: function (res) {   
                console.log(res.result)
                _this.setData({ 
                healthContent: res.result.data[0].words,
                            //设置adContent值 
                })      
                },
                fail: console.error  
                })         
            }         
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