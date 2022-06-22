// pages/answerCure.js

const app = getApp()

Page({
    data: {
        data:[], //查询到的数据
        length:'', //查询到的数据数量
    },

    gogiveCure: function(e) {
        wx.navigateTo({
            url:'/pages/cure/answerCure/giveCure/giveCure'
        })

        // 跳转时，将按钮对应的学生姓名放入本地缓存
        wx.setStorage({
            key:"stu_id",
            data:e.currentTarget.dataset.id, //js从wxml获取变量的方法
        })
    },
    onLoad: function () {
        
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
        //************************ ，用于获取state为0的（尚未得到回复的）问诊单
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
            name: 'queryDisease',  
            data: {
            state: 0 
            },
            //回调函数
            success: function (res) {   
            console.log(res.result)
    
            _this.setData({ 
            data: res.result.data,
            length: res.result.data.length,
                        //设置data值 
            })      
            },
            fail: console.error  
            })         
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