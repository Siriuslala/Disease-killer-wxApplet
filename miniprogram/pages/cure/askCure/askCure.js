//index.js
//import WxValidate from '../../utils/WxValidate';
var app = getApp()
const db = wx.cloud.database()//调用默认云环境的数据库引用
Page({
  data: {
    text: "提交",    //提交按钮上显示的文字
    input: "",     //input输入框的值，用于更新记录成功后清空输入框的值
    
    // 照片上传
    // imgs: []
    imgbox: [],//选择图片
    fileIDs: [],//上传云存储后的返回值
  },

  

 //********************************** */  表单提交触发此函数
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
  name: 'addDisease',
  data: { 
  stuName: e.detail.value.input_name,
  stuGender:e.detail.value.input_gender,
  stuAge:e.detail.value.input_age,
  stuTel:e.detail.value.input_tel,
  stuWords:e.detail.value.input_text,
  stu_id: app.globalData.user_id,
  state: 0, //state为0表示问诊单尚未被医生看到 
  }, 
  
  success: function (res) {
    wx.showToast({
      title: '提交成功',
    })
  console.log(res.result)

  //更新成功后清空输入框的值
  _this.setData({
     input:"",
  })
  },
  
  fail:console.error
  })
  },

// *************************************** 跳转到诊疗结果页
  goReceive: function() {
    wx.navigateTo({
        url:'/pages/cure/askCure/receiveCure/receiveCure'
    })
},


// ***************************************照片上传
 // 删除照片 &&
 imgDelete1: function (e) {
  let that = this;
  let index = e.currentTarget.dataset.deindex;
  let imgbox = this.data.imgbox;
  imgbox.splice(index, 1)
  that.setData({
   imgbox: imgbox
  });
 },
 // 选择图片 &&&
 addPic1: function (e) {
  var imgbox = this.data.imgbox;
  console.log(imgbox)
  var that = this;
  var n = 5;
  if (5 > imgbox.length > 0) {
   n = 5 - imgbox.length;
  } else if (imgbox.length == 5) {
   n = 1;
  }
  wx.chooseImage({
   count: n, // 默认9，设置图片张数
   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
   success: function (res) {
    // console.log(res.tempFilePaths)
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths

    if (imgbox.length == 0) {
     imgbox = tempFilePaths
    } else if (5 > imgbox.length) {
     imgbox = imgbox.concat(tempFilePaths);
    }
    that.setData({
     imgbox: imgbox
    });
   }
  })
 },

 //图片
 imgbox: function (e) {
  this.setData({
   imgbox: e.detail.value
  })
 },


 //发布按钮
 fb: function (e) {
  if (!this.data.imgbox.length) {
   wx.showToast({
    icon: 'none',
    title: '图片类容为空'
   });
  } else {
    //上传图片到云存储
    wx.showLoading({
     title: '上传中',
    })
    let promiseArr = [];
    for (let i = 0; i < this.data.imgbox.length; i++) {
     promiseArr.push(new Promise((reslove, reject) => {
      let item = this.data.imgbox[i];
      let suffix = /\.\w+$/.exec(item)[0];//正则表达式返回文件的扩展名
      wx.cloud.uploadFile({
       cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
       filePath: item, // 小程序临时文件路径
       success: res => {
        this.setData({
         fileIDs: this.data.fileIDs.concat(res.fileID) 
        });
       //上传fileID至云******************************
       //检查基础库版本
       if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力') 
        } else {
        wx.cloud.init({
        traceUser: true, 
        }) 
        }
       wx.cloud.callFunction({ 
        name: 'search',  
        data: {     
        stu_id: app.globalData.user_id,
        stuPic: res.fileID,
        },
        //search的 回调函数
        success: function (res) {   
        console.log(res.result)
        },
        fail: console.error  
        })         


        console.log(res.fileID)//输出上传后图片的返回地址
        reslove();
        wx.hideLoading();
        wx.showToast({
         title: "上传成功",

         //上传fileID至问诊数据库
        })
       },
       fail: res=>{
        wx.hideLoading();
        wx.showToast({
         title: "上传失败",
        })
       }

      })
     }));
    }
    Promise.all(promiseArr).then(res => {//等数组都做完后做then方法
     console.log("图片上传完成后再执行")
     this.setData({
      imgbox:[]
     })
    })

   }
 },    
   
   
    
 

 
 
})