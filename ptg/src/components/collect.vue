<template>
  <div class="collect" style="background-color:#fff;">
    <div>
      <mt-header class="header" title="商品收藏">
        <router-link to="/index" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
          <mt-button slot="right">管理</mt-button>
      </mt-header>
    </div>
    <div class="fir-pro" v-for="(item,i) of list" :key="i" @click="pro_dtl" :data-id="item.goods_id">
      <div class="shop">
        <div class="shop-detail">
          <div class="shop-detail-left">
            <div class="quan"></div>
          </div>
          <div class="shop-detail-center">
            <img class="pdd-lazy-image" :src="'http://pxx.weixihang.com/images/'+item.image_name">
          </div>
          <div class="shop-detail-right">
            <div class="shop-detail-right-text">
              <div class="shop-top-text">
                <img class="text-image" src="../../public/img/nianhj.png">{{item.goods_name}}
              </div>
              <div class="shop-top-guige">
                <div class="guige">请选择规格></div>
              </div>
            </div>
            <div class="shop-bottom-price">
              <div class="shop-price">
                <div class="price">¥{{(item.goods_price).toFixed(2)}}</div>
                <div class="pin-end">已拼{{item.sales_initial+item.sales_actual}}件</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="tabbar">
      <div class="tabbar-left">
        <div class="tabbar-left-text">已选0件</div>
        <div class="tabbar-left-price">
          <div class="tabbar-left-price-text">
            <span class="text-heji">合计: </span>
            <span class="text-price">¥0</span>
          </div>
        </div>
      </div>
      <div class="tabbar-right">去结算</div>
    </div>-->
  </div>
</template>
<script>
  export default{
    data(){
      return {
        list:[],
      }
    },
    methods:{
      pro_dtl(e){
        var id = e.currentTarget.dataset.id;
        this.$router.push({path:'productDetails',query:{goods_id:id}});
      },
      getCollect(){
        this.axios.get("product/collectLists")
        .then(res=>{
          console.log(res);
          this.list=res.data.data;
          console.log(this.list);
        })
      },
    },
      created(){
        this.getCollect();
      }
  }
</script>
<style scoped>
  *{
    padding:0;margin:0;
    box-sizing:border-box;
  }
  img{
    border:0;
    max-width:100%;
    vertical-align:top;
  }
  .header{
    background:#fff;
    color:#000;
    padding-top:12px; 
  }
  .fir-pro{
    position:relative;
    width:100%;
    background-color:#f4f4f4;
  }
  .shop{
    position:relative;
    width:100%;
    background-color:#f4f4f4;
    margin-top:8px;
  }
  .fir-pro:first-child{
    margin-top:0;
  }
  .shop-name{
    display:flex;
    flex-direction:row;
    padding:12px 12px 1px;
  }
  .shop-img{
    position:relative;
    margin:0 10px 0 0;
    width:20px;
    height:20px;
    border:1px solid #ededed;
    border-radius:2px;
  }
  .pdd-lazy-image{
    width:100%;
    height:100%;
    min-width:1px;
    min-height:1px;
  }
  .shop-text{
    position:relative;
    max-width:245px;
    line-height:22px;
    font-size:13px;
    color:#58595b;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
  }
  .shop-detail{
    position:relative;
    width:100%;
    height:134px;
    overflow:visible;
    display:flex;
  }
  .shop-detail-left{
    display:flex;
    width:43px;
    height:91px;
    text-align:center;
    justify-content: center;
    align-items: center;
  }
  .quan{
    width:18px;
    height:18px;
    background-image:url("../../public/img/quan.png");
    background-repeat:no-repeat;
    background-size:contain;
  }
  .shop-detail-center{
    position:relative;
    margin:10px 10px 10px 0;
    width:114px;
    height:114px;
    text-align:center;
    border-radius:2px;
    overflow:hidden;
  }
  .shop-detail-right{
    position:relative;
    width:209px;
    height:100%;
  }
  .shop-detail-right-text{
    position:absolute;
    top:0;
    left:0;
    margin-top:10px;
    padding-right:12px;
    width:100%;
  }
  .shop-top-text{
    margin-bottom:1px;
    font-size:14px;
    line-height:19px;
    color:#151516;
    max-height:38px;
    overflow:hidden;
    word-break:break-all;
  }
  .text-image{
    display:inline-block;
    margin:1px 4px 0 0;
    height:15px;
  }
  .shop-top-guige{
    position:relative;
    display:inline-block;
    margin-top:6px;
    padding:0 15px 0 4px;
    height:21px;
    border:1px solid #e0e0e0;
    border-radius:2px;
    color:#58595b;
    font-size:13px;
    line-height:21px;
  }
  .guige{
    min-width:3px;
    max-width:123px;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
  }
  .shop-bottom-price{
    position:absolute;
    bottom:0;
    left:0;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom:10px;
    padding-right:12px;
    width:100%;
    height:38px;
  }
  .shop-price{
    position:relative;
    width:100%;
    height:18px;
    line-height:18px;
    display:flex;
  }
  .price{
    margin-right:4px;
    font-size:16px;
    font-weight:700;
    color:#e02e24;
  }
  .pin-end{
    font-size:12px;
    color:#9c9c9c;
  }
  .tabbar{
    position:fixed;
    display:flex;
    flex-direction:row;
    bottom:0;
    left:0;
    width:100%;
    background-color:#fff;
    text-align:center;
    z-index:10002;
  }
  .tabbar-left{
    height:54px;
    line-height:54px;
    position:relative;
    width:229px;
    border-top:1px solid #ededed;
  }
  .tabbar-left-text{
    position:absolute;
    top:0;
    left:0;
    padding-left:12px;
    font-size:14px;
    color:#9c9c9c;
    height:54px;
    line-height:54px;
  }
  .tabbar-left-price{
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding-right:12px;
    height:100%;
  }
  .tabbar-left-price-text{
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
    height:18px;
    line-height:18px;
  }
  .text-heji{
    width:36px;
    font-size:12px;
    color:#58595b;
  }
  .text-price{
    width:30px;
    color:#d62c16;
    font-size:20px;
  }
  .tabbar-right{
    position:relative;
    width:146px;
    height:54px;
    line-height:54px;
    color:#fff;
    font-size:17px;
    background-color:#e02e24;
        margin-right:-8px;
  }
</style>