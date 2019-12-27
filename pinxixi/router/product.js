const express = require('express');
//导入连接池
const pool = require('../pool.js');
//创建路由器
const router = express.Router();

//1.1、	商品详情
router.get("/detail",(req,res)=>{
    var goods_id = req.query.goods_id;
    function detail(){
        return new Promise((resolve,reject)=>{
             var sql = "select goods_id,goods_name,spec_type,deduct_stock_type,content,goods_sort,delivery_id,goods_status,sales_initial,sales_actual from goods where goods_id=?";
             pool.query(sql,[goods_id],(err,result)=>{
                  if(err) throw err;
                  if(result.length>0){
                       resolve(result);
                  }else{
                    reject();
                  }
             })
        })
   }
   function images(){
        return new Promise((resolve,reject)=>{
             var sql = "select id,goods_id,image_id,image_name from goods_image where goods_id = ?";
             pool.query(sql,[goods_id],(err,result)=>{
                  if(err) throw err;
                  if(result.length>0){
                       resolve(result);
                  }else{
                    reject();
                  }
             })
        })
   }
   function spec(){
        return new Promise((resolve,reject)=>{
            var sql = "select * from goods_spec where goods_id = ?";
            pool.query(sql,[goods_id],(err,result)=>{
                    if(err) throw err;
                    if(result.length>0){
                        resolve(result);
                    }else{
                        reject();
                    }
                })
            })
    }
    Promise.all([
        detail(),
        images(),
        spec()
   ]).then(arr=>{
        console.log(arr);
        if(arr.length==3){
            res.send({code:200,msg:"success",data:{detail:arr[0][0],image:arr[1],spec:arr[2]}});
        }else{
            res.send({code:401,msg:"未找到该商品",data:{}});
        }
   }).catch(()=>{
        
   });

});

//查询当前商品是否已收藏
router.get('/iscollect',(req,res)=>{
     var goods_id = req.query.goods_id;
     var user_id = req.session.user_id;
     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
     if(!goods_id){
          res.send({code:401,msg:"未提供goods_id参数"});
          return;
     }
     var sql = "select 1 from user_collect where user_id= ? and goods_id= ?";
     pool.query(sql,[user_id,goods_id],(err,result)=>{
          if(err){
               res.send({code:300,msg:"出错了请重试....."});
               return;
          };
          if(result.length>0){
               res.send({code:200,msg:"该商品已收藏"});
               return;
          }else{
               res.send({code:301,msg:"该商品未收藏"});
               return;
          }    
     }) 
})

//查询用户所有已收藏商品
router.get("/collectLists",(req,res)=>{
     var user_id = req.session.user_id;
     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
     var sql = "select goods.goods_id,goods_name,goods_price,goods_sort,goods_status,sales_initial,sales_actual,image_name as image_name from goods left join goods_spec on goods.goods_id = goods_spec.goods_id left join (select goods_id,max(image_name) as image_name from  goods_image  group by goods_id ) as  goods_image on goods.goods_id = goods_image.goods_id where goods.goods_id in (select goods_id from user_collect where user_id= ? )";
     pool.query(sql,[user_id],(err,reslut)=>{
          if(err) throw err;
          if(reslut.length>0){
               res.send({code:200,msg:"获取成功",data:reslut})
               return;
          }else{
               res.send({code:300,msg:"当前用户没有收藏商品"})
               return;
          }
     })
});

//收藏商品与取消收藏（如果未收藏则加入收藏，如果已收藏则取消收藏）
router.get('/collect',(req,res)=>{
     var goods_id = req.query.goods_id;
     var user_id = req.session.user_id;
     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
     if(!goods_id){
          res.send({code:401,msg:"未提供goods_id参数"});
          return;
     }
     var sql = "select 1 from user_collect where user_id= ? and goods_id= ?";
     pool.query(sql,[user_id,goods_id],(err,result)=>{
          if(err){
               res.send({code:300,msg:"出错了请重试....."});
               return;
          };
          if(result.length>0){
               var sql2 = "delete from user_collect where user_id= ? and goods_id= ?";
          }else{
               var sql2 = "insert into user_collect (user_id,goods_id,create_time) values (?,?,UNIX_TIMESTAMP())";
          }      
          pool.query(sql2,[user_id,goods_id],(err,result)=>{
               if(err){
                    res.send({code:300,msg:"出错了请重试....."});
                    return;
               };
               if(result.affectedRows>0){
                    res.send({code:200,msg:"操作成功"});
                    return;
               }else{
                    res.send({code:301,msg:"操作失败....."});
                    return;
               }
          })
     }) 
})


//模糊搜索商品(可根据商品名称模糊查询)
router.get("/search",(req,res)=>{
     var kws = req.query.kws;
     var sql = "select goods.goods_id,goods_name,goods_price,goods_sort,goods_status,sales_initial,sales_actual,image_name as image_name from goods left join goods_spec on goods.goods_id = goods_spec.goods_id left join (select goods_id,max(image_name) as image_name from  goods_image  group by goods_id ) as  goods_image on goods.goods_id = goods_image.goods_id where goods.goods_name like ?";
     pool.query(sql,[`%${kws}%`],(err,reslut)=>{
          if(err) throw err;
          if(reslut.length>0){
               res.send({code:200,msg:"获取成功",data:reslut})
               return;
          }else{
               res.send({code:300,msg:"未查询到"})
               return;
          }
     })
});

//导出路由器
module.exports = router;