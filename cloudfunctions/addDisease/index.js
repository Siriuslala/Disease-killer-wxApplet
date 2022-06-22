//此函数用来在disease中添加问诊数据
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    return await db.collection('disease').add({
      data: {
        stuName: event.stuName,
        stuGender: event.stuGender,
        stuAge: event.stuAge,
        stuTel: event.stuTel,
        stuWords: event.stuWords,
        stuPic: event.stuPic,
        state: event.state,
        stu_id: event.stu_id,
        _openid:"oQH3L5AqAs9myi-ksNT9d-pQUaSQ",
        //加入用户信息
        user_name: event.user_name,
        user_id: event.user_id,
        user_code: event.user_code,
        user_identity: event.user_identity,
        //加入订单信息
        order_name: event.order_name, //药品名
        order_num: event.order_num, //购买数量
        stu_id: event.stu_id, //购买者id
        is_order: event.is_order, 
      }
    })
  } catch(e) {
    console.error(e)
  }
}