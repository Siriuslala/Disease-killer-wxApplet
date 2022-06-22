// queryInfo函数用于从数据库查询到具体data对应的数据，并将该数据返回
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口
exports.main = async (event, context) => {
    
    return db.collection('Info').where({   
    imgName:event.imgName, //主页顶部滑动广告
    health:event.health, //主页健康讲堂
    knowledge:event.knowledge, //主页医药科普
    date:event.date, //主页学校讯息
    })  
    .get() //get方法查询符合条件的记录，并通过return返回给调用此云函数的代码。一般在微信小程序端调用云函数  
    }