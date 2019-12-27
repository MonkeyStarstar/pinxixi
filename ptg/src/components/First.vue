<template>
<div class="index-body">
  <div class="top">
      <div  class="search" @click="go_search">
        <div class="search-content">
         <span class="icon-search"></span>
          <span class="search-text">酸辣粉粗粉</span>
       </div>
      </div>
    <div class="nav-contain">
      <ul class="nav-content">
        <li class="nav-item">
          <span class="selected" style="color:#ffffff;border-color:#ffffff">热门</span>
        </li>
        <li class="nav-item">
          <span  style="color:#ffd68a;border-color:#ffd68a">女装</span>
        </li>
        <li class="nav-item">
          <span  style="color:#ffd68a;border-color:#ffd68a">鞋包</span>
        </li>
        <li class="nav-item">
          <span  style="color:#ffd68a;border-color:#ffd68a">男装</span>
        </li>
        <li class="nav-item">
          <span  style="color:#ffd68a;border-color:#ffd68a">食品</span>
        </li>
        <li class="nav-item">
          <span  style="color:#ffd68a;border-color:#ffd68a">母婴</span>
        </li>
        <li class="nav-item">
          <span  style="color:#ffd68a;border-color:#ffd68a">手机</span>
        </li>
      </ul>
    </div>
  </div>
  <!--轮播图-->
  <div class="cont-mid">
    <div class="banner" >
      <mt-swipe :auto="4000">
       <mt-swipe-item><img src="../assets/banner1.png"/></mt-swipe-item>
        <mt-swipe-item><img src="../assets/banner2.png"/></mt-swipe-item>
        <mt-swipe-item><img src="../assets/banner3.png"/></mt-swipe-item>
        <mt-swipe-item><img src="../assets/banner4.png"/></mt-swipe-item>
        <mt-swipe-item><img src="../assets/banner5.png"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="icon-list">
      <ul class="icon1f">
	    	<li>
			    <img src="../assets/1.png" alt="">
		  	  <p>限时秒杀</p>
		    </li>
		    <li>
			    <img src="../assets/2.png" alt="">
		  	  <p>断码清仓</p>
		    </li>
		    <li>
			    <img src="../assets/3.png" alt="">
			    <p>新衣馆</p>
		    </li>
		    <li>
			    <img src="../assets/4.png" alt="">
		      <p>多多果园</p>
		    </li>
        <li>
			    <img src="../assets/iconSale.png" alt="">
		  	  <p>9.9元特卖</p>
		    </li>
	    </ul>
      <ul class="icon2f">
	      <li>
			    <img src="../assets/iconInvest.png" alt="">
		  	  <p>充值中心</p>
		    </li>
		    <li>
			    <img src="../assets/5.png" alt="">
		      <p>品牌特卖</p>
		    </li>
		    <li>
			    <img src="../assets/iconSign.png" alt="">
			    <p>现金签到</p>
		    </li>
		    <li>
			    <img src="../assets/6.png" alt="">
		  	  <p>金猪赚大钱</p>
		    </li>
        <li>
			    <img src="../assets/iconEam.png" alt="">
		  	  <p>电器城</p>
		    </li>
	    </ul>
    </div>
    <div class="new">
      <div class="new_1">
        <span>新人专享</span>
        <span>|</span>
        <span></span>
        <span>爆款热卖 包邮到家</span>
        <span>查看更多</span>
      </div>
      <div class="new_2">
        <div class="new_2_lef">
          <img src="../assets/iconOpen.png"/>
        </div>
        <div class="new_2_mid">
          <img src="../assets/7.png"/>
          <p class="title">嗨吃家酸辣粉整箱</p>
          <span class="sub">新人价</span>
          <span class="price">￥12.98</span>
        </div>
        <div class="new_2_mid">
          <img src="../assets/8.png"/>
          <p class="title">加绒/不加绒打底裤</p>
          <span class="sub">新人价</span>
          <span class="price">￥9.9</span>
        </div>
       </div>
      </div>
    <div class="_2f">
      <div class="_2f_top">
        <div class="img">
          <img src="../assets/13.png"/>
        </div>
        <div class="text">
          <span>百亿补贴</span>
          <span>|</span>
          <span>正品保证</span>
          </div>
        <span class="_2f_right">全部补贴品</span>
      </div>
      <div class="_2f_bottom">
        <div class="_2f_bottom_content">
          <div class="_2f_1">
            <img src="../assets/14.png"/>
            <span class="sub">补贴价</span>
            <span class="price">￥5199</span>
          </div>
          <div class="_2f_1">
            <img src="../assets/15.png"/>
            <span class="sub">补贴价</span>
            <span class="price">￥135</span>
          </div>
          <div class="_2f_1">
            <img src="../assets/16.png"/>
            <span class="sub">补贴价</span>
            <span class="price">￥27.2</span>
          </div>
          <div class="_2f_1">
            <img src="../assets/17.png"/>
            <span class="sub">补贴价</span>
            <span class="price">￥27.5</span>
          </div>
        </div>
      </div>
    </div>
    <div class="prot_list" @click="pro_dtl"  v-for="(item,i) of list" :key="i" :data-id="item.goods_id">
      <div class="prot_list1">
        <img :src="'http://pxx.weixihang.com/images/'+item.image_name" />
      </div>
      <div class="prot_list2" >
        <div class="prot_top" >
          <img src="../assets/19.png" alt="">
          {{item.goods_name}}
        </div>
        <div class="prot_bottom">
          <div class="ugp">
            <span>退货包运费</span>
            <span>急速退款</span>
          </div>
          <div class="bt">
            <span>{{(item.goods_price).toFixed(2)}}</span>
            <span>已拼{{item.sales_initial+item.sales_actual}}件</span>
          </div>
      </div>
    </div>
  </div>
  </div>
  <div style="weith:100%;height:156px;"></div>
</div>
</template>
<script>
  export default {
    data(){
    return {
      list:[], //商品列表数组
    }
  },
    methods:{
      pro_dtl(e){
        var id = e.currentTarget.dataset.id;
        this.$router.push({path:'productDetails',query:{goods_id:id}});
      },
      go_search(){
        this.$router.push("/search")
      },
      loadMore(){
        this.axios.get("index/lists").then(res=>{
        //2:获取服务器返回结果
        //3:将返回结果保存
        this.list = res.data.data;
        //console.log(this.list);
       })
      }
    },
    created(){
      this.loadMore();
    }
};
</script>
<style scoped>
  *{margin:0;padding:0;
    box-sizing:border-box;}
  ol,ul{list-style:none;}
  .index-body{
  width:100%;height:100%;
  }
  .top{
     /*width:365px;*/
    width:100%;height:100px;
    background-color:#e02e24;
    background-image:url(http://t00img.yangkeduo.com/goods/2019-12-04/6fc7a74469a55998f8bf2eca04002c32.jpeg);
    background-position:0 0;
    background-size:cover;
    background-repeat:no-repeat;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9999;
    position:fixed;
  }
  .cont-mid{
    width:100%;height:100%;
    position:relative;
    top:100px;
  }
  /*搜索框样式*/
  .to_search{
    display:block;
  }
  .search{
    background-color: #ededed;
    /*width:354px;*/
    width:95%;
    height:38px;
    border:1px solid #ccc;
    border-radius:8px;
    position:relative;
    top:11px;
    left:1.5%;
  }
  .search-content{
    position:absolute;
    top:0.6rem;
    left:135px;
  }
  .icon-search:before{
    content: "\E604";
    font-size: .14rem;
    width: .14rem;
    height: .14rem;
    font-family: "mintui" !important;
    font-size:1rem;
  }
  .search-text{
    color: #9c9c9c;
    font-size: 1rem;
  }
   /*第一个导航栏*/ 
   .nav-contain{
     margin-top:0.5rem;
     position: absolute;
     height: 2rem;
     width: 100%;
     top:60px;
   }
   .nav-content{
    position: relative;
    height:2.25rem;
    font-size: 1rem;
    color: #333;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
   }

   .nav-item{
     height: .42rem;
     display: inline-block;
     margin-left: .2rem;
     line-height: .42rem;
     text-align: center;
     padding:0 0.5rem;
   }
  /* 轮播图*/
   .banner{
     height:140px;width:100%; /*width:365px;*/
   }
   .banner img{
     width:100%;
   }

   .icon-list{
     /*width:365px;*/
     width:100%;height:160px;
     border:5px solid #df301a;
     border-bottom:6 solid #df301a;
   }
    .icon-list>ul{
			margin:0 auto;
			padding:1rem 0;
			list-style:none;
			display:flex;
			justify-content:space-around;
			margin-top:-0.5rem;
		}
    .icon-list>ul>li{
			font-size:0.8rem;
			text-align:center;
		}
    .icon-list>ul>li>img{
      width:39px;height:39px;
    }
    .icon-list>ul>li>p{
      text-align: center;
      height: .16rem;
      line-height: .16rem;
      margin-top: .6rem;
      font-size: .12rem;
      color: #777
    }
    /*首页新人专享样式*/
    .new{
      /*width:375px;*/
      width:100%;height:212px;
    }
    .new>.new_1,.new>.new_2{
      height:42px;
      padding:0 12px;
    }
    .new>.new_1>span{
      line-height:42px;
    }
    .new>.new_1>span:nth-child(1){
      color: #151516;
      font-size: 1rem;
      padding-left: .04rem;
      font-weight: 700;
    }
    .new>.new_1>span:nth-child(2){
      display: inline-block;
      width: .01rem;
      font-size: .85rem;
      margin: 0 .08rem;
      color:#666;
      padding:0 10px;
    }
    .new>.new_1>span:nth-child(3){
      display: inline-block;
      position: relative;
      width: 1.5rem;
      height: 1.25rem;
      font-size: .12rem;
      color: #fff;
      line-height: normal;
      text-align: center;
      border-radius: .02rem;
      background: #f32109;
      top:5px;
    }
    .new>.new_1>span:nth-child(3):before{
      content: "券";
      position: absolute;
      height: .02rem;
      left:25%;
    }
    .new>.new_1>span:nth-child(4){
      color: #9c9c9c;
      font-size: .95rem;
      margin-left: .8rem;
      line-height: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .new>.new_1>span:nth-child(5){
      font-family: icomoon;
      font-style: normal;
      position: relative;
      float: right;
      padding-right: 1rem;
      color: #9c9c9c;
      font-size: .95rem
    }
    .new>.new_1>span:nth-child(5):after{
      content: ">";
      font-size: 1.5rem;
      margin-left: .3rem;
      position: absolute;
      right: 0;
    }
    .new>.new_2{
      height:170px;
      display:flex;
    }
    .new>.new_2>div{
      width:33%;
      height:157px;
      justify-content:space-around;
      padding-top:0.4rem;
    }
    .new>.new_2>.new_2_lef>img{
      height:100%;
    }
    .new>.new_2>.new_2_mid>img{
      height:70%;width:100%;
    }
    .new>.new_2>.new_2_mid>p.title{
      line-height: 1.3rem;
      height: 1.3rem;
      font-size: 0.8rem;
      text-align: center;
      color: #151516;
      overflow: hidden;
    }
    .new>.new_2>.new_2_mid>span.sub{
      display: inline-block;
      height: 1.2rem;
      font-size: .13rem;
      padding: 0 .5rem;
      border-radius: .1rem;
      color: #fff;
      background: #f32109;
    }
    .new>.new_2>.new_2_mid>span.price{
      display: inline-block;
      font-size: 0.9rem;
      font-weight: 600;
      margin-left: .5rem;
      color: #f32109;
    }
    .new_2>div:nth-child(3){
      margin-left:.3rem;
    }
    ._2f{
      height:162px;width:100%;
    }
    ._2f>._2f_top{
      height:37px;
      padding:0 0.8rem;
      display:flex;
      line-height:37px;
      position:relative;
    }
    ._2f>._2f_top>.img{
      width:1.6rem;height:1.5rem;
    }
    ._2f>._2f_top>.img>img{
      width:100%;height:100%;
      position:relative;
      top:0.4rem;
    }
    ._2f>._2f_top>.text>span:nth-child(1){
      font-size: .96rem;
      color: #151516;
      font-weight: 700;
      margin:0 .6rem;
      padding-top: .02rem;
    } 
    ._2f>._2f_top>.text>span:nth-child(2){
      display: inline-block;
      width: .01rem;
      font-size: .85rem;
      color:#666;
      padding-right:0.5rem;
    }
    ._2f>._2f_top>.text>span:nth-child(3){
      padding-top: .04rem;
      display: inline-block;
      font-size: .95rem;
      color: #9c9c9c;
    }
    ._2f>._2f_top>._2f_right{
      display:inline-block;
      font-family: icomoon;
      font-style: normal;
      color: #9c9c9c;
      font-size: .95rem;
      position:absolute;
      right:2.3%;
    }
    ._2f>._2f_top>._2f_right:after{
      content:">";
    }
    ._2f>._2f_bottom{
      height:125px;
    }
    ._2f>._2f_bottom>._2f_bottom_content{
      padding: .02rem .12rem 0;
      display:flex;
    }
    ._2f>._2f_bottom>._2f_bottom_content>div{
      width:24.5%;
      padding-left:.2rem;
    }
    ._2f_bottom_content>._2f_1>img{
      width:100%;
      height:85%;
    }
    ._2f_bottom_content>._2f_1>span.sub,._2f_bottom_content>._2f_1>span.price{
      font-size: .31rem;
      color: #e02e24;
      padding-left: .06rem;
      margin-top: .15rem;
    }
    .prot_list{
      height:156px;
      padding-top: 0.06rem;
      margin:17px 0;
      padding:0 8px;
      display:flex;
    }
    .prot_list>.prot_list1{
      width:40%;
      height:100%;
    }
     .prot_list>.prot_list1>img{
       width:100%;
       height:100%;
     }
     .prot_list>.prot_list2{
       width:60%;
       font-size: .93rem;
       padding-left:0.85rem;
       position:relative;
       padding: 10px;
     }
     .prot_list>.prot_list2>.prot_top{
       max-height: 40px;
       word-break: break-all;
       color: #151516;
       overflow: hidden;
     }
     .prot_list>.prot_list2>.prot_top>img{
       height: 1rem;
     }
     .prot_list>.prot_list2>.shop{
       margin-top: .285rem;
       font-size: .11rem;
       color:#9c9c9c;
     }
     .prot_list>.prot_list2>.prot_bottom{
       position:absolute;
       bottom:0;
     }
     .prot_list>.prot_list2>.prot_bottom>.ugp{
       height: 1.34rem;
       line-height: 1.34rem;
       overflow: hidden;
       width: 100%;
       font-size:.11rem;
       padding-left:.5rem;
       margin-bottom: 0.02rem;
       background: rgba(255, 87, 6, 0.08);
       color: rgb(255, 87, 6);
     }
      .prot_bottom>.ugp>span:nth-child(1){
       margin-right:1.3rem;
     }
     .prot_bottom>.bt>span:nth-child(1){
       color: #e02e24;
       font-size: 1.05rem;
       font-weight: 700;
       line-height: 1;
     }
      .prot_bottom>.bt>span:nth-child(2){
        font-weight: 400;
        color: #9c9c9c;
        font-size: .9rem;
        margin-left: .5rem;
        display: inline-block;
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
      }
  </style>