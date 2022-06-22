// query函数用于从数据库disease查询到state为0的具体学生的数据，并将该数据返回
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口
exports.main = async (event, context) => {
    
    return db.collection('cure').where({     
    stu_id: event.stu_id,
    })
    .get() //get方法查询符合条件的记录，并通过return返回给调用此云函数的代码。一般在微信小程序端调用云函数  
    }