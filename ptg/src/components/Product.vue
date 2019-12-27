<template>
<div style="background-color:#eaeaea;">
  <h3 style="color:#d81e06">推荐</h3>
  <div class="product-app">
     <!--Product.vue-->
     <!--一个商品 循环-->
     <div class="goods-item" v-for="(item,i) of list" :key="i">
        <img :src="'http://pxx.weixihang.com/images/'+item.image_name" />
        <span class="title">{{item.goods_name}}</span>
        <div class="info">
          极速退款
        </div>
        <div class="Spell-list">
          <span class="_1">￥{{item.goods_price}}</span>
          <span class="_2">已拼{{item.sales_initial+item.sales_actual}}件</span>
          <button class="_3">发现</button>
        </div>
     </div>
  </div>
</div>
</template>
<script>
  export default{
    data(){
      return{
        list:[],
      }
    },
    methods:{
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
  }
</script>
<style scoped>
*{
  margin:0;padding:0;
  box-sizing:border-box;
  }
h3{
  color:#d81e06;
  padding:10px 0;
}
/*1:最外层样式*/
.product-app{
 display: flex;/*指定当前元素弹性布局*/
 flex-wrap: wrap;/*指定子元素换行*/
 /*指定子元素两端对齐*/
 justify-content:space-between;
 padding:4px;/*最外加内边距*/
}
/*2:修饰商品样式*/
.goods-item{
  width:49%;
  border-radius: 5px;
  margin:2px 0;/*外边距*/
  padding:0px; /*内边距*/
  box-sizing: border-box;/*重新计算宽度*/
  display: flex;/*弹性布局*/
  flex-direction: column;/*指定子元素排列方式*/
  min-height: 247px;/*最小高度*/
  background-color:#fff;
}
/*4:修饰商品中图片样式*/
.goods-item img{
  width:100%;
}
.goods-item>.title{
    font-size:13px;
    color: #151516;
    height: 18px;
    line-height:19px;
    overflow: hidden;
    margin:2px 2px;
}
.goods-item>.info{
    color:#d5724f;
    font-size: 14px;
    line-height: 1;
    margin:8px 2px;
}
.Spell-list{
  position:relative;
}
.Spell-list>._1{
  font-weight: 700;
  color: #e02e24;
}
.Spell-list>._2{
  font-size:11px;
  color: #9c9c9c;
  font-weight: 400;
  margin-left:3px;
}
.Spell-list>._3{
  position:absolute;
  right: 0;
  bottom:0px;
  height:26px;
  outline: none;
  background-color: transparent;
  border: 1px solid #c6c6c6;
  border-right: none;
  font-size:12px;
  color: #58595b;
  border-top-left-radius: .36rem;
  border-bottom-left-radius: .36rem;
  padding-left:7px;
}
.Spell-list>._3:after{
  content:">";
  position: relative;
  font-family: icomoon;
  font-style: normal;
  font-size:16px;
  bottom: .02rem;
  margin-left:4px;
  color: #9c9c9c;
}
</style>