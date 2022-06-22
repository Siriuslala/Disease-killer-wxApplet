// pages/info/register.js
//引入全局变量
var app = getApp();
Page({
    data: {
        //已下两个变量均需要与全局变量绑定，不能通过表单提交等触发事件函数里的“setData”实现
        login_state:"未登录", //用于在界面中标注用户登录状态,其值为全局变量
         //queryUser成功返回时(登录成功时)，增设退出登录按钮
        quit: "", //quit用于wxml中渲染“退出登录”按钮前所做的判断，其值为全局变量user_login_state,在onload函数中获取。全局变量为true时用户状态为已登录，quit也为true,则渲染退出登录的button
    },

    go_register:function(){
        wx.navigateTo({
        url: '/pages/info/user/register/register',
        })
    },
    
//********************************** */  登录函数
user_login(e){
    //将登录信息在云数据库中进行比对
    if (!wx.cloud) {
    console.error('请使用 2.2.3 或以上的基础库以使用云能力') 
    } else {
    wx.cloud.init({
    traceUser: true, 
    }) 
    }
    
    var _this = this;
    //调用云函数
    wx.cloud.callFunction({   
    name: 'queryDisease',
    data: { 
    user_id: e.detail.value.input_user_id,
    user_code: e.detail.value.input_user_code,
    },
    
    success: function (res) {
    console.log(res.result)
    wx.showToast({
      title: '登录成功',
    })    
    //更新成功后清空输入框的值
    _this.setData({
       input:"",
       quit: false,
       login_state: "已登录",
    })
    //改全局变量 
    //修改全局变量的用户身份
    app.globalData.user_identity = res.result.data[0].user_identity
    //修改全局变量的用户学工号
    app.globalData.user_id = res.result.data[0].user_id
    //修改全局变量的登录状态
    app.globalData.user_login_state = true
    },
    
    fail:console.error
    })
    },

//*********************************** 退出登录 */
quit:function(e){
    var _this=this;
    _this.setData({
        login_state: "未登录", //用户状态重新设置为“未登录”
        quit: true,          
    })
    wx.showToast({
        title: '已退出',
    })
    //全局变量
        app.globalData.user_identity = 2 //恢复初始状态
        app.globalData.user_id = '' //清空账号
        app.globalData.user_login_state = false
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
        if(app.globalData.user_login_state == true){
            this.setData({
                login_state:"已登录",
                quit: false,
            })           
            }
            if(app.globalData.user_login_state == false){
            this.setData({
                login_state:"未登录",
                quit: true,
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