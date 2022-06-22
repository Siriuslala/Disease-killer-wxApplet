// queryDrug函数用于从数据库drug查询到包含相关字眼的药品数据
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口
exports.main = async (event, context) => {
    
    return db.collection('drug').where({   
        drugname: db.RegExp({  
            //正则化查询，用于查询包含event.drugname的字符串
            regexp: event.drugname,
            options: 'i',    
        })
    })
    .limit(4)  
    .get() //get方法查询符合条件的记录，并通过return返回给调用此云函数的代码。一般在微信小程序端调用云函数  
    }