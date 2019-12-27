const express = require('express');
//导入连接池
const pool = require('../pool.js');
//创建路由器
const router = express.Router();

//1.1、	添加收货地址
router.post("/add",(req,res)=>{
    var user_id = req.session.user_id;
     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
    var name = req.body.name;
    var phone = req.body.phone;
    var province_id = req.body.province_id;
    var city_id = req.body.city_id;
    var region_id = req.body.region_id;
    var detail = req.body.detail;
    var sql = "insert into user_address (user_id,name,phone,province_id,city_id,region_id,detail,create_time,update_time) values (?,?,?,?,?,?,?,UNIX_TIMESTAMP(),UNIX_TIMESTAMP() )";
    pool.query(sql,[user_id,name,phone,province_id,city_id,region_id,detail],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows>0){
            res.send({code:200,msg:"添加地址成功"});
        }else{
            res.send({code:301,msg:"添加地址失败"});      
        }
    })
});
//查询收货地址
router.get("/lists",(req,res)=>{
    var user_id = req.session.user_id;

     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
 
    var sql = "select a.name as name,phone,province_id,province.name as province_name,city_id,city.name as city_name,region_id,region.name as region_name ,detail from user_address as a left join ( select * from region where level= 1) as province on province.id = a.province_id left join ( select * from region where level= 2) as city on city.id = a.city_id left join ( select * from region where level= 3) as region on region.id = a.region_id where user_id = ? order by a.address_id desc";
    pool.query(sql,[user_id],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send({code:200,msg:"查询地址成功",data:result});
        }else{
            res.send({code:301,msg:"查询地址失败"});      
        }
    })
});

//省市区三联数据
router.get("/map",(req,res)=>{
    var sql = "SELECT id,pid,name,level FROM region ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        //console.log(result);
        if(result.length>0){
            const map = result;
            const province=[];
            const city=[];
            const region=[]

            for(var item of map){
                if(item.level == 1){
                    
                    province.push({
                        name:item.name,
                        id:item.id,
                        pid:item.pid,
                        children:[]
                    })
                }else if(item.level == 2){
                    city.push({
                        name:item.name,
                        id:item.id,
                        pid:item.pid,
                        children:[]
                    })
                }else{
                    region.push({
                        name:item.name,
                        id:item.id,
                        pid:item.pid,
                        children:[]
                    })

                }
            }
           
            for (var list of province){
                let id=list.id;
                for(let key of city){
                   if(id==key.pid){
                       list.children.push(key)
                   }
                }
              }  
              
            for(var shi of city){
                let id = shi.id
                for (let key of region) {
                    if (id == key.pid) {
                        shi.children.push(key)
                    }
                }
              
              }
            res.send({code:200,msg:"查询地址成功",data:province});
            return;
        }else{
            res.send({code:301,msg:"查询地址失败"});
            return;      
        }
    })

})

//导出路由器
module.exports = router;