// pages/cure/answerCure/giveCure.js
// var patient = this.data.patient 
Page({
    data: {
        studata:"",
        input:"",
    },
    
    onLoad: function (options) {
        //从缓存中提取学生姓名
        var _this = this;
        wx.getStorage({
            key:"stu_id",
            success:function(res){
    //res即为缓存中学生的姓名
    // ***************************** 在回调函数中，顺便用res.data查询数据库中该病号的其他信息
            if (!wx.cloud) {
                console.error('请使用 2.2.3 或以上的基础库以使用云能力')
                } else { 
                wx.cloud.init({ 
                traceUser: true,
                })
                }    
                
                //调用云函数
                wx.cloud.callFunction({ 
                name: 'queryDisease',  
                data: {     
                stu_id: res.data,   //用回调函数的返回值
                },
                //query的 回调函数
                success: function (res) {   
                console.log(res.result)
                _this.setData({ 
                studata: res.result.data[0],
                            //设置data值 
                })      
                },
                fail: console.error  
                })         


            } //success        
        }) //setStorge
    },//onload
// ************************************** 医生上传表单

    docSubmit(e){
        //从缓存中提取学生姓名
        var _this = this;
        wx.getStorage({
            key:"stu_id",
            success:function(res){
                //检查基础库版本
                if (!wx.cloud) {
                console.error('请使用 2.2.3 或以上的基础库以使用云能力') 
                } else {
                wx.cloud.init({
                traceUser: true, 
                }) 
                }
                //调用云函数
                wx.cloud.callFunction({   
                name: 'addCure',
                data: { 
                P_S_: e.detail.value.input_ps, //向Cure里面上传备注
                stu_id: res.data, //向Cure上传诊断结果的同时附上学生的学号
                },
                
                success: function (res) {
                console.log(res.result)
                wx.showToast({
                  title: '提交成功',
                })
                //更新成功后清空输入框的值
                _this.setData({
                input:"",
                })
                },
                
                fail:console.error
                })
//************************* 更新被回复的问诊单的state为 1 */
                wx.cloud.callFunction({ 
                    name: 'search',  
                    data: {     
                    stu_id: res.data,
                    state: 1,
                    },
                    //search的 回调函数
                    success: function (res) {   
                    console.log(res.result)
                    },
                    fail: console.error  
                    })         

            } //success
            }) //getStorge 
        
        }, //docSubmit
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
   
    
    onReady: function () {

        //从数据库获取学生信息
        
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