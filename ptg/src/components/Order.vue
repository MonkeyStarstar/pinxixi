<template>
  <div id="order">
    <div>
      <mt-header class="header">
      <router-link :to="{path:'productDetails',query:{goods_id:goods_id }}" slot="left">
          <mt-button icon="back">返回</mt-button>
       </router-link>
      </mt-header>
    </div>
    <div class="adress-info">
      <div class="_icon">
         <img src="../assets/33.png"/>
      </div>
      <div class="_info">
        <span class="name">{{address.name}}</span>
        <span class="phone">{{address.phone}}</span>
      </div>
      <div class="_address">
        <span>{{address.province_name}}</span>
        <span>{{address.city_name}}</span>
        <span>{{address.region_name}}</span>
        <span>{{address.detail}}</span>
      </div>
    </div>
    <div class="Order_settlement ">
    <!--<h3>订单结算页</h3>-->
      <div class="add1" @click="goaddress">
        <a href="#">+</a>
        <span>手动添加收货地址</span>
        <span>&gt</span>
    </div>
    <div class="add2">
     <!--  <div class="add2_sop">
        <img class="_1" src="../assets/22.png"/>
       <!-- <p class="_2">ORUSS手表官方旗舰店</p> 
        <img class="_3" src="../assets/23.png"/>
      </div>-->
      <div class="add2_pro">
        <div class="add2_pro_1">
          <img :src="'http://pxx.weixihang.com/images/'+list.image[0].image_name"/>
        </div>
        <div class="add2_pro_2">
          <p class="p1">{{list.detail.goods_name}}</p>
         <!-- <p class="p2">款式: 时尚镶钻-土豪金-金带金面</p>-->
          <div class="add2_pro_2_1">
            <p  class="add2_pro_2_2">￥{{(list.spec[0].goods_price).toFixed(2)}}/件</p>
            <span  class="add2_pro_2_3">退货包运费</span>
          </div>
        </div>
        <div class="add2_pro_3">
          <span>购买数量</span>
          <div class="add2_pro_3_1"> 
            <button class="btn1" style="background:#fff;" @click="doit(-1)" id="btn1" :disabled=true>-</button>
            <span>{{n}}</span>
            <button class="btn2" @click="doit(1)">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="add3">
      <div class="add3_1">
        <span>微信支付</span>
      </div>
      <div class="add3_2">
        <span>支付宝</span>
      </div>
    </div>
    <div class="add4">
      <div class="add4_cont"> 
        <span  class="add4_1">平台用户信息安全由</span>
        <a href="#">中国人保财险</a>
        <span  class="add4_2">承保</span>
      </div>
    </div>
    <div class="add5">
      <div class="add5_1">
        <span class="add5_1_1">实付款:</span>
        <span class="add5_1_2">￥{{(list.spec[0].goods_price*n).toFixed(2)}}</span>
        <span class="add5_1_3">免运费</span>
      </div>
      <div class="add5_2">
        <a href="#">立即支付</a>
      </div>
     </div>
    </div>
  </div>
  <!--地址-->
  
</template>
<script>
  export default{
    data(){
      return{
        n:1,
        address:{},
        goods_id:'',
        list:{detail:{
          goods_name:'',
          sales_actual:0,
          sales_initial:0,
          content:"dd"
          },
          image:[{image_name:"16cf2fd3-f922-4a2a-a901-fd35191facf3.jpg"}],
          spec:[
            {goods_price:0}
            ]
          }
      }
    },
    methods:{
      goaddress(){
        this.$router.push({path:"/address",query:{goods_id:this.goods_id}})
      },
      doit(i){
          var btn=document.getElementById("btn1");
          this.n+=i;
          this.n<1&&(this.n=1);
          if(this.n<=1){
            btn.disabled = true
            btn.setAttribute("style","background-color: #FFF;")
          }else{
            btn.disabled = false
            btn.setAttribute("style","")
          }
        },
      goBack(){
        this.$router.push({path:"product/detail",query:{goods_id:this.goods_id }})
      },
      getDetail(){
        this.goods_id = this.$router.history.current.query.goods_id;
        //console.log(this.goods_id);
        this.axios.get("product/detail",{params:{
          goods_id:this.goods_id
        }}).then(res=>{
          //2:获取服务器返回结果
          //3:将返回结果保存
          this.list = res.data.data;
          //console.log(this.list);
        })
      },
      getAddress(){
        this.axios.get("address/lists").then(res=>{
          //2:获取服务器返回结果
          //3:将返回结果保存
          console.log(res.data.data);
          if(res.data.code == 200){
            this.address= res.data.data[0];
          }
        })
      },
      
    },
    created(){
      this.getDetail();
      this.getAddress();
    }
  }
</script>
<style scoped>
  *{margin:0;padding:0;
    box-sizing:border-box;}
  .header{
    background:#fff;
    color:#000;
  }
  ol,ul{list-style:none;}
  .Order_settlement{
    width:100%;height:100%;
    padding-left:10px;
   background:#fff;
  }
  .add1{
    position: relative;
    width: 100%; height:48px;
    margin-bottom:10px;
    padding-right:22px;
    border-bottom:1px solid #ccc;
  }
  .add2{
    position: relative;
    width: 100%; height:190px;
    min-height: 1.58rem;
    margin-bottom: 8px;
    background-color: #fff;
    overflow: hidden;
    border-bottom:1px solid #eee;
  }
  .add3{
    position: relative;
    width: 100%; height:93px;
    background-color: #fff;
    margin-bottom: 8px;
  }
  .add4{
    position: absolute;
    bottom: 63px;
    width:100%;
    text-align: center;
    color: #9c9c9c;
    font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
    left:0;
    right:0;
    background: #f5f5f5;
    height:0px;
  }
  .add5{
    position: fixed;
    width: 100%;
    height: 53px;
    line-height: 53px;
    padding: 0;
    bottom: 0;
    right:0;
    background-color: #fff;
    z-index: 9000;
    display:flex;
    justify-content:flex-end;
  }
  .Order_settlement>.add1>span{
   
  }
  .Order_settlement>.add1>a{
    text-decoration:none;
    display:inline-block;
    width:17px;height:17px;
    border:1px solid #e02e24;
    background:#e02e24;
    font-size: 17px;
    color: #fff;
    font-weight: 400;
    left:3px;
    line-height:13px;
    text-align:center;
    position: absolute;
    top:15px;
  }
  .Order_settlement>.add1>span:nth-child(2){
    display:inline-block;
    width:100%;height:100%;
    padding-left:32px;
    padding-right:22px;
    line-height:48px;
    color: #151516;
    font-size:14px;
  }
  .Order_settlement>.add1>span:nth-child(3){
    display:inline-block;
    position: absolute;
    top:8px;
    right:10px;
    font-size:22px;
    color: rgba(0,0,0,.15);
    font-weight: 400;
  }
  .add2>.add2_sop{
    position:relative;
    display:flex;
    height:39px;
    line-height:39px;
  }
  .add2>.add2_sop>._1{
    display:inline-block;
    width:20px;
    height:20px;
    position:absolute;
    top:9px;
  }
   .add2>.add2_sop>._2{
     font-size:13px;
     color: #151516;
     padding-left:30px;
     padding-right:8px;
   }
   .add2>.add2_sop>._3{
     width:30px;
     height:16px;
     position:relative;
     top:13px;
   }
   .add2_pro>.add2_pro_1{
     width:90px;height:90px;
   }
   .add2_pro{
     display:flex;
     position:relative;
     height:100px;
   }
   .add2_pro>.add2_pro_1>img{
    width: 80px;
    height: 100px;
   }
    .add2_pro>.add2_pro_2{
      background:#f5f5f5;
      position: relative;
      display: inline-block;
      height: auto;
      padding-top: 3px;
      padding-bottom:25px;
      padding-left:15px;
      vertical-align: top;
    }
    .add2_pro>.add2_pro_2>.p1{
      position: relative;
      width: 100%;
      max-height:31px;
      line-height:16px;
      font-size:13px;
      color: #151516;
      overflow: hidden;
    }
    .add2_pro>.add2_pro_2>.p2{
      position: relative;
      font-size: 12px;
      line-height: 16px;
      color: #9c9c9c
    }
    .add2_pro_2>.add2_pro_2_1{
      position: relative;
      font-size: 14px;
      line-height: 14px;
      color: #151516;
      display: flex;
      bottom:-24px;
    }
    .add2_pro_2_3{
      font-size:12px;
      color: #339B29;
      border: .01rem #339B29 solid;
      padding:0 3px;
      margin-left:5px;
    }
    .add2_pro_3{
     display:flex;
     height:47px;width:100%;
     position:absolute;
     bottom:-71px;
    }
    .add2_pro_3>span{
      position: relative;
      display: inline-block;
      font-size:16px;
      color: #151516;
    }
    .add2_pro_3>.add2_pro_3_1{
      position: absolute;
      height: 25px;
      right: 24px;
      display: flex;
      align-items: center;
    }
    .add2_pro_3>.add2_pro_3_1>.btn1,.add2_pro_3>.add2_pro_3_1>.btn2{
      position: relative;
      display: inline-block;
      width:31px;
      height: 25px;
      border-radius:2px
    }
    .add2_pro_3>.add2_pro_3_1>span{
      display: inline-block;
      height:22px;
      font-size:14px;
      margin: 0;
      padding:0 14px;
      color: #151516;
      text-align: center;
      border-radius:2px;
      background-color: #fff;
      box-sizing: content-box;
    }
    .add3_1{
      border-bottom:1px solid #eee;
    }
    .add3>.add3_1,.add3>.add3_2{
      position: relative;
      height:46px;
      line-height:46px;
    }
    .add3>.add3_1>span,.add3>.add3_2>span{
      margin-left:32px;
      font-size:15px;
      color: #151516;
    }
    .add3>.add3_1>span:before{
      content: "";
      position: absolute;
      display: inline-block;
      width:22px;
      height:22px;
      left:-1px;
      top:12px;
      background:url("../assets/29.png") no-repeat;
    }
    .add3>.add3_2>span:before{
      content: "";
      position: absolute;
      display: inline-block;
      width:22px;
      height:22px;
      left:-1px;
      top:12px;
      background:url("../assets/27.png") no-repeat;
    }
    .add4>.add4_cont{
      position:absolute;
      bottom:0;
    }
    .add4>.add4_cont>.add4_1:before{
      content: "";
      display: inline-block;
      width:18px;
      height:18px;
      position:relative;
      top:2px;
      background:url("../assets/32.png") no-repeat;
    }
    .add4>.add4_cont>a{
      display:inline-block;
      text-decoration:none;
      height:12px;
      width:87px;
      margin-left:1px;
      margin-right: 1px;
      margin-top:1px;
      margin-bottom:1px;
      color:#000;
      font-size:14px;
    }
   .add5>.add5_1{
     font-size:14px;
     color: #151516;
   }
   .add5>.add5_1>.add5_1_2{
     font-size:20px;
     color: #e02e24;
     margin-left:-1px;
     margin-top:-3px;
   }
   .add5>.add5_1>.add5_1_3{
     color: #e02e24!important;
    margin:0 5px;
   }
   .add5>.add5_2>a{
     display:inline-block;
     text-decoration:none;
     position: relative;
     float: right;
     width:146px;
     height: 100%;
     font-size:18px;
     color: #fff;
     background-color: #e02e24;
     text-align: center;
     padding-top:1px;
   }
   .adress-info{
     width:100%;height:74px;
     position:relative;
     background-color: #ccc;
     color: #151516;
     font-size: 13px;
     overflow-x: hidden;
   }
   ._icon{
    color: #58595b;
    line-height: 1;
    font-weight: 400;
    position:absolute;
    top:25px;
    left:20px;
   }
   ._info{
     width:80%;height:24px;
     position:absolute;
     top:20px;
     left:55px;
     font-size:14px;
     display:flex;
   }
   ._address{
     width:80%;height:24px;
     position:absolute;
     top:44px;
     left:51px;
     font-size:14px;
   }
   ._info>.name{
    font-size:16px;
    font-weight: 700;
    margin-right:12px;
   }
  ._address>span{
    padding-left:5px;
  }
</style>