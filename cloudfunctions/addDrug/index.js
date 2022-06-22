//此函数用来在 drug 中添加数据
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    return await db.collection('drug').add({
      data: {
        drugname: event.drugname,
        norm: event.norm, //规格
        type: event.type, //型号
        factory: event.factory, //厂家
        origin: event.origin, //产地
        price: event.price, //单价
        expdate: event.expdate, //有效期

        //反馈
        feedback:event.feedback,
      }
    })
  } catch(e) {
    console.error(e)
  }
}