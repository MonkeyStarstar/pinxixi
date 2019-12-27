const express = require('express');
//导入连接池
const pool = require('../pool.js');
//创建路由器
const router = express.Router();

router.post("/buyNow",(req,res)=>{
    var user_id = req.session.user_id;
     if(!user_id){
          res.send({code:400,msg:"请登录"});
          return;
     }
    var goods_id = req.baody.goods_id;
    var goods_num = req.body.goods_num;
    var address_id = req.body.address_id;
    var sql = "insert into "
})

//导出路由器
module.exports = router;