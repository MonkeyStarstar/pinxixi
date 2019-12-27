const express = require('express');

//创建路由器
const router = express.Router();

//生成并发送验证码
router.get("/send",(req,res)=>{
    //获取图形验证码
    var captcha = req.query.captcha;
    var Scaptcha = req.session.captcha;
    //获取用户手机号
    var phone = req.query.phone;
    if(!captcha){
        res.send({code:401,msg:"请先输入图形验证码"});
        return;
    }
    if(!phone){
        res.send({code:402,msg:"请输入手机号"});
        return;
    }
    if(!Scaptcha){
        res.send({code:403,msg:"图形验证码过期，请重新获取"});
        return;
    };
    if(captcha!=Scaptcha){
        res.send({code:301,msg:"图形验证码错误"});
        return;
    }
    req.session.captcha = null;
    //导入腾讯云开发者SDk
    const tencentcloud = require('tencentcloud-sdk-nodejs');
    // 导入对应产品模块的client models
    const SmsClient = tencentcloud.sms.v20190711.Client;
    const models = tencentcloud.sms.v20190711.Models;

    const Credential = tencentcloud.common.Credential;
    const ClientProfile = tencentcloud.common.ClientProfile;
    const HttpProfile = tencentcloud.common.HttpProfile;
    // 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey
    let cred = new Credential("AKIDX1eKwb69iAb8f1tn8ZwAP5g1KWbYqxQk", "MchbK1wrkXDk9MPAcx9A3wkNsFRTwGUW");
    let httpProfile = new HttpProfile();
    httpProfile.endpoint = "sms.tencentcloudapi.com";
    let clientProfile = new ClientProfile();
    clientProfile.httpProfile = httpProfile;
    let client = new SmsClient(cred, "ap-shanghai", clientProfile);

    let sreq = new models.SendSmsRequest();
    
    //产生六位的随机验证码
    var range = function (start, end) {
        var array = [];
        for (var i = start; i < end; ++i) array.push(i);
        return array;
    };
    var randomstr = range(0, 6).map(function (x) {
        return Math.floor(Math.random() * 10);
    }).join('');

    let params = `{"PhoneNumberSet":["+86${phone}"],"TemplateID":"503455","Sign":"微西航","TemplateParamSet":["${randomstr}","10"],"SmsSdkAppid":"1400297406"}`;
    sreq.from_json_string(params);

    client.SendSms(sreq, function(errMsg, response) {

        if (errMsg) {
            console.log(errMsg);
            res.send({code:401,msg:'调用短信接口出现错误',data:errMsg});
            return;
        }
        var resStatus = response.SendStatusSet[0];
        if(resStatus.Code=="Ok"){
            req.session.MsgCode = randomstr;
            res.send({code:200,msg:resStatus.Message});
        }else{
            res.send({code:301,msg:resStatus.Message});
        }
    });

});

//验证短信验证码是否正确
router.get("/verify",(req,res)=>{
    var MsgCode = req.query.MsgCode;
    var Scode = req.session.MsgCode;
     if(!Scode){
          res.send({code:401,msg:"短信验证码过期，请重新获取"});
          return;
     };
     if(Scode!=MsgCode){
         res.send({code:301,msg:"验证码错误"});
     }else{
        res.send({code:200,msg:"验证码正确"});
     }

})

module.exports = router;