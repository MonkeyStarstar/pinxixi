const express = require('express');
//创建路由器
const router = express.Router();
//创建算术验证码
router.get('/getCode',(req,res)=>{
    const svgCaptcha = require('svg-captcha');
    // const cap = svgCaptcha.create({
    //     ignoreChars: '0o1i',
    //     size: 4,
    //     // 字体大小 
    //     fontSize: 36, 
    //     // 噪声线条数 
    //     noise: 2, 
    //     // 宽度 
    //     width: 80, 
    //     // 高度 
    //     height: 30
    // });
    // //存session用于验证接口获取文字码
    // req.session.captcha = cap.text.toLowerCase(); 
    // // res.type('svg');
    // // res.send(cap.data);    
    // res.setHeader('Content-Type', 'image/svg+xml');
    // res.write(String(cap.data));
    // res.end();
    const cap = svgCaptcha.createMathExpr({
        mathMin:1,
        mathMax:9,
        mathOperator: "+/-"
 //       background: '#218868' ,
 //       color:true
    });
    console.log(cap.text);
    req.session.captcha = cap.text; // session 存储
    res.type('svg'); // 响应的类型
    res.send(cap.data);
})
//验证验证码是否正确
router.get('/checkCode',(req,res)=>{
    var VCode = req.query.captcha;
    var captcha = req.session.captcha;
     if(!captcha){
          res.send({code:401,msg:"短信验证码过期，请重新获取"});
          return;
     };
     if(captcha!=VCode){
         res.send({code:301,msg:"验证码错误"});
     }else{
        req.session.captcha = null;
        res.send({code:200,msg:"验证码正确"});
     }
})

module.exports = router;