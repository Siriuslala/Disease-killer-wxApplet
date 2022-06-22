// 此函数用于 更新数据库
// 当上传失败（updated:0）时，将_openid重写；或者在数据库的相关记录里添加_openid字段(例如在addCure里顺便添加上_openid)
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
try { 
return db.collection('disease').where({ 
stu_id:event.stu_id, //诊断完成后提交回复，并将该问诊单的state置1
_openid:"oQH3L5AqAs9myi-ksNT9d-pQUaSQ",   //where方法设置过滤条件，这里是选择tag字段为特定值的记录
})
.update({ //update方法更新所筛选出来的记录

data: { //update方法参数为json对象，data属性值的类型为json，字段为需要更新的字段。这里需要更新state字段。
state: event.state,
stuPic: event.stuPic,
},

})

} catch (e) { //若有异常，打印出来
   console.log(e)
}
}