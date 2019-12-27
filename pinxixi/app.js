const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser")
const UserRouter = require("./router/user.js");
const IndexRouter = require("./router/index.js");
const ProductRouter = require("./router/product.js");
const AddressRouter = require("./router/address.js");
const OrderRouter = require("./router/order.js");
const SmsRouter = require("./router/sms.js");
const CaptchaRouter = require("./router/captcha.js");
//创建服务器端口8080
var app = express();
app.listen(8080);
//配置跨域
app.use(cors({
     origin:["http://127.0.0.1:8081","http://localhost:8081","http://127.0.0.1:8080","http://localhost:8080","http://127.0.0.1:80","http://localhost:80","http://pinxixi.plus:80","http://127.0.0.1","http://localhost","http://pinxixi.plus"],    //允许跨域列表
     credentials:true    //每次请求需要验证
}));
//配置session模块
app.use(session({
     secret:"128位字符",  //安全字符串
     resave:true,   //每次用户发送请求更新数据
     saveUninitialized:true   //保存初始化数据
}));
//托管静态文件
app.use(express.static(
     "public"
));
//使用body-parser中间件，将post请求的数据解析为对象
app.use( bodyParser.urlencoded({
     extended:false //使用querystring模块(速度快)，不使用qs模块
}) );
//挂载UserRouter
app.use('/user',UserRouter);
app.use('/index',IndexRouter);
app.use('/product',ProductRouter);
app.use('/address',AddressRouter);
app.use('/order',OrderRouter);
app.use('/sms',SmsRouter);
app.use('/captcha',CaptchaRouter);
//404处理
app.use(function (req, res) {
     res.sendFile( __dirname + "/" + "/public/images/about.jpg" );
})