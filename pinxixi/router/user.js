const express = require('express');
//导入连接池
const pool = require('../pool.js');
//创建路由器
const router = express.Router();
/**用户登录接口**/
router.post("/login",(req,res)=>{
     var user_name  = req.body.user_name;
     var password = req.body.password;
     var VCode = req.body.captcha;
     var captcha = req.session.captcha;
    if(!user_name){
          res.send({code:401,msg:"用户名不能为空!"});
          return;
     };
     if(!password){
          res.send({code:402,msg:"密码不能为空！"});
          return;
     };
     if(!VCode){
          res.send({code:403,msg:"验证码不能为空！"});
          return;
     };
     if(!captcha){
          res.send({code:404,msg:"验证码过期，请重新获取"});
          return;
     };
     if(captcha!=VCode){
         res.send({code:405,msg:"验证码错误"});
         return;
     }
     req.session.captcha = null;
     var sql = "SELECT user_id FROM store_user WHERE user_name=? AND password=?"
     pool.query(sql,[user_name,password],(err,result)=>{
          if(err) throw err;
          if(result.length > 0){
               req.session.user_id = result[0]["user_id"];
               res.send({code:200,msg:"登录成功",data:result[0]});
          }else{
               res.send({code:301,msg:"用户名或密码错误"});
          }
     });
});
/**用户登录测试接口**/
router.get("/logintest",(req,res)=>{
     var user_name  = req.query.user_name;
     var password = req.query.password;
    if(!user_name){
          res.send({code:401,msg:"用户名不能为空!"});
          return;
     };
     if(!password){
          res.send({code:402,msg:"密码不能为空！"});
          return;
     };
     
     var sql = "SELECT user_id FROM store_user WHERE user_name=? AND password=?"
     pool.query(sql,[user_name,password],(err,result)=>{
          if(err) throw err;
          if(result.length > 0){
               req.session.user_id = result[0]["user_id"];
               res.send({code:200,msg:"登录成功",data:result[0]});
          }else{
               res.send({code:301,msg:"用户名或密码错误"});
          }
     });
});
/**验证用户名是否存在*/
router.get("/checkuser",(req,res)=>{
     var user_name = req.query.user_name;
     if(!user_name){
          res.send({code:401,msg:"用户名不能为空"});
          return;
     };
     var sql = "SELECT user_id FROM store_user WHERE user_name=?"
     pool.query(sql,[user_name],(err,reslut)=>{
          if(err) throw err;
          console.log(reslut);
          if(reslut.length>0){
               res.send({code:201,msg:"用户名已存在"})
          }else{
               res.send({code:200,msg:"用户名可用"})
          }
     })
});
/**验证手机号是否存在*/
router.get("/checkphone",(req,res)=>{
     var phone = req.query.phone;
     if(!phone){
          res.send({code:401,msg:"手机号不能为空"});
          return;
     };
     var sql = "SELECT user_id FROM store_user WHERE phone=?"
     pool.query(sql,[phone],(err,reslut)=>{
          if(err) throw err;
          if(reslut.length>0){
               res.send({code:201,msg:"手机号已存在"})
          }else{
               res.send({code:200,msg:"手机号可用"})
          }
     })
});
/**用户注册 */
router.post("/register",(req,res)=>{
     console.log(req.body);
     var user_name = req.body.user_name;
     var password = req.body.password;
     var phone = req.body.phone;
     var gender = req.body.gender;
     var MsgCode = req.body.MsgCode;
     var Scode = req.session.MsgCode;
     if(!user_name){
          res.send({code:401,msg:"用户名不能为空"});
          return;
     };
     if(!password){
          res.send({code:402,msg:"密码不能为空"});
          return;
     };
     if(!phone){
          res.send({code:406,msg:"手机号不能为空"});
          return;
     };
     if(!MsgCode){
          res.send({code:403,msg:"短信验证码不能为空！"});
          return;
     };
     if(!Scode){
          res.send({code:404,msg:"短信验证码过期，请重新获取"});
          return;
     };
     if(Scode!=MsgCode){
         res.send({code:405,msg:"短信验证码错误"});
         return;
     }
     req.session.MsgCode = null;
     var sql = "INSERT INTO store_user (user_name,password,phone,gender,create_time,update_time) VALUES (?,?,?,?,UNIX_TIMESTAMP(),UNIX_TIMESTAMP() )";
     console.log(sql);
     pool.query(sql,[user_name,password,phone,gender],(err,result)=>{
          if(err){
               res.send({code:400,msg:"出错了请重试....."});
               return;
          };
          console.log(result);
          if(result.affectedRows>0){
               //console.log("注册成功");
               res.send({code:200,msg:"注册成功"});
               return;
          }else{
               res.send({code:400,msg:"出错了请重试....."});
               return;
          }
     })
});
//获取当前用户信息
router.get("/sessiondata",(req,res)=>{
     var user_id = req.session.user_id;
     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
     var sql = "SELECT user_id,user_name,phone,avatarUrl,gender,address_id,create_time,update_time FROM store_user WHERE user_id=?";
     pool.query(sql,[user_id],(err,reslut)=>{
          if(err) throw  err;
          if(reslut.length>0){
               res.send({code:200,msg:"成功",data:reslut[0]});
          }else{
               res.send({code:401,msg:"系统繁忙"})
          }
     })
})
//退出登录
router.get("/logout",(req,res)=>{
     req.session.destroy();
     res.send({code:200,msg:"退出成功"});
})
//导出路由器
module.exports = router;