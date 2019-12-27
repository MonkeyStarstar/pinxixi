const express = require("express");
const pool = require("../pool.js");
const router = express.Router();

/** 主页商品接口**/
router.get("/lists",(req,res)=>{
     var sql = "select goods.goods_id,goods_name,goods_price,goods_sort,goods_status,sales_initial,sales_actual,image_name as image_name from goods left join goods_spec on goods.goods_id = goods_spec.goods_id left join (select goods_id,max(image_name) as image_name from  goods_image  group by goods_id ) as  goods_image on goods.goods_id = goods_image.goods_id ";
     pool.query(sql,(err,reslut)=>{
          if(err) throw err;
          if(reslut.length>0){
               res.send({code:200,msg:"获取成功",data:reslut})
          }
     })
});

module.exports = router;