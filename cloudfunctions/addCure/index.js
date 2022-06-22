//此函数用来在cure中添加问诊数据
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    return await db.collection('cure').add({
      data: {
       P_S_: event.P_S_,
       stu_id: event.stu_id,
      }
    })
  } catch(e) {
    console.error(e)
  }
}