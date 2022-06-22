// pages/info/feedback.js
Page({

  
    data: {

    },

    formSubmit(e){
        //检查基础库版本
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
        name: 'addDrug',
        data: { 
            feedback: e.detail.value.input_text,
        },
        
        success: function (res) {
        console.log(res.result)
      
        //更新成功后清空输入框的值
        _this.setData({
           input:"",
        })
        },
        
        fail:console.error
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