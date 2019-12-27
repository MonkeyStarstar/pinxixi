<template>
  <div class="det-tabbar">
    <div>
      <mt-header class="header">
        <router-link to="/index" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <!--轮播图-->
    <div class="swipe">
      <mt-swipe :auto="0">
        <mt-swipe-item  v-for="(item,i) of list.image" :key="i"><img class="w-100" :src="'http://pxx.weixihang.com/images/'+item.image_name"></mt-swipe-item>
      </mt-swipe>
      <img src="../../public/img/qingcang.jpeg">
    </div>
    <!--产品详情-->
    <div class="container">
      <section class="content">
        <div class="contents"> 
          <span class="price"><i>¥</i>{{list.spec[0].goods_price}}</span>
          <span class="secspan">再售31345件后恢复¥{{list.spec[0].line_price}}起</span>
          <span class="thdspan">已拼{{list.detail.sales_initial+list.detail.sales_actual}}+件</span>
        </div>
        <div class="pro-detail">
          <span class="detail1">
            <span>
              <img class="xbtj" style="height:16px;width:80px" src="../../public/img/xbtj.png">
              <span class="detail2">
                <span>{{list.detail.goods_name}}</span>
              </span>
              <span class="detail3">退货包运费</span>
            </span>
          </span>
        </div>
      </section>
      <div class="content2">
        <div class="f2f2f2"></div>
        <div class="row4s">
          <div class="row1s">
            <div class="ml8">退货包运费</div>
          </div>
          <div class="row1s">
            <div class="dian">·</div>
            <div>全场包邮</div>
          </div>
          <div class="row1s">
            <div class="dian">·</div>
            <div>7天无理由退货</div>
          </div>
          <div class="row1s">
            <div class="dian">·</div>
            <div>假一赔十</div>
          </div>
          <div class="yjt">
            <span><img src="../../public/img/right.png"></span>
          </div>
        </div>
        <div class="f2f2f2"></div>
        <div class="changxb">
          <div>
            <img class="cxbang" src="../../public/img/paihang.png">
            <span style="color:#58595b">「畅销榜」第</span>
            <span style="color:#e02e24">5</span>
            <span style="color:#58595b">名</span>
          </div>
          <div class="yjt">
            <span><img src="../../public/img/right.png"></span>
          </div>
        </div>
      </div>
    </div>
    <!--拼单-->
    <div class="canyupd">
      <div class="canyu">
        28人在拼单，可直接参与
        <div class="ckmore">
          查看更多
        </div>
      </div>
      <div class="pinzhe">
        <div style="transition-timing-function:cubic-bezier(0.25,0.46,.45,0.94);transition-duration:0ms;transform:translate(0px,0px) translateZ(0px);">
          <div style="opacity:1">
            <div class="menpo">
              <span></span>
              <div class="first_pp">
                <div class="first_min">孟婆、来碗豆浆</div>
                <div class="first_cha">
                  还差
                  <span style="color:#e02e24">1人</span>
                  拼成
                </div>
              </div>
            </div>
            <div class="first_go">去拼单</div>
          </div>
          <div style="opacity:1">
            <div class="menpo">
              <span></span>
              <div class="first_pp">
                <div class="first_min">一叶落而知秋</div>
                <div class="first_cha">
                  还差
                  <span style="color:#e02e24">1人</span>
                  拼成
                </div>
              </div>
            </div>
            <div class="sec_go ">去拼单</div>
          </div>
        </div>
      </div>
    </div>
    <!--商品评价-->
    <div class="pjia">
      <div class="pjia_tou">
        <div class="pjia_head">
          <div class="pjia_head_lefttext">商品评价(37280)</div>
          <span class="pjia_head_righttext">查看全部</span>
        </div>
      </div>
      <div class="pjia_lei">
        <ul class="pjia_xing">
          <li class="zpin" style="display:inherit;background-color:#daf8cd;color:#25b513;">
            <span>正品(151)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>质量很好(2699)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>衣服很好(1778)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>版型很好(529)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>没有色差(450)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>暖和(430)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>合身(427)</span>
          </li>
          <li class="zpin" style="display:inherit;background-color:#fdefee;color:#58595b">
            <span>做工很好(347)</span>
          </li>
        </ul>
      </div>
      <div class="pjia_content">
        <div class="pjia_first">
          <div class="pjia_min">
            <div class="pjia_1strow">
              <span class="pjia_tx1"></span>
              <span class="pjia_mingzi">莹</span>
            </div>
          </div>
          <div class="pjia_text">该用户觉得商品很好，给出了5星好评。</div>
        </div>
        <div class="pjia_second">
          <div class="pjia_min">
            <div class="pjia_1strow">
              <span class="pjia_tx2"></span>
              <span class="pjia_mingzi">爱你无悔</span>
            </div>
          </div>
          <div class="pjia_text">衣服做工很好，赠品的围巾也很喜欢呢，正品标识也认证了，很满意哦！</div>
        </div>
      </div>
    </div>
    <!--商品详情-->
    <div id="detail" v-html="list.detail.content" v-lazy-container="{ selector: 'img' }"></div>
    <!--
    <div class="pro_dtl">
      <p>商品详情</p>
      <div class="pro_dtl_list_attr">
        <div class="attr-item">
          <div class="attr-key">品牌</div>
          <div class="attr-value">花花公子贵宾</div>
        </div>
        <div class="attr-item">
          <div class="attr-key">填充物</div>
          <div class="attr-value">丝绵</div>
        </div>
        <div class="attr-item">
          <div class="attr-key">成分含量</div>
          <div class="attr-value">81%（含）—90%（含）</div>
        </div>
        <div class="attr-item">
          <div class="attr-key">填充克数</div>
          <div class="attr-value">100g（含）—150g（不含）</div>
        </div>
        <div class="attr-item">
          <div class="attr-key">版型</div>
          <div class="attr-value">宽松</div>
        </div>
        <div class="attr-item">
          <div class="attr-key">领型</div>
          <div class="attr-value">棒球领</div>
        </div>
        <div class="attr-item show-all-sttr">查看全部
          <img src="../../public/img/right.png">
        </div>
      </div>
      <div class="huahua">
        <div class="huahuavip">
          【花花公子贵宾】【拍下就送价值58元一条围巾,围巾,围巾】 【拼的不是价格,我们拼的是质量】【消会者保障+15天无理由退换货】本款棉衣采用优质面料,让您穿起来更加舒适保暖,做工精细,原单吊牌齐全,无论透气性都非常好,自用送礼两相宜!(M码90—110)(L码110—130)(XL码130—150)(2XL码150—165)(3XL码160—180)(4XL码175—195)[5XL码190-210】本店默认(发中通快递!)要发其它快递联系客服备注!
        </div>
      </div>
      <li class="huahua_pic" style="height:316px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/15daytui.jpeg">
      </li>
      <li class="huahua_pic" style="height:96px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/shouquan.jpg">
      </li>
      <li class="huahua_pic" style="height:656px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/guibin.jpg">
      </li>
      <li class="huahua_pic" style="height:484px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/fashion1.jpg">
      </li>
      <li class="huahua_pic" style="height:484px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/fashion2.jpg">
      </li>
      <li class="huahua_pic" style="height:430px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/fashion3.jpg">
      </li>
      <li class="huahua_pic" style="height:554px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/mianliao.jpg">
      </li>
      <li class="huahua_pic" style="height:305px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/colordisplay1.jpg">
      </li>
      <li class="huahua_pic" style="height:305px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/colordisplay2.jpg">
      </li>
      <li class="huahua_pic" style="height:507px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/fillingmaterial.jpg">
      </li>
      <li class="huahua_pic" style="height:499px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow1.jpg">
      </li>
      <li class="huahua_pic" style="height:459px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow2.jpg">
      </li>
      <li class="huahua_pic" style="height:430px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow3.jpg">
      </li>
      <li class="huahua_pic" style="height:382px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow4.jpg">
      </li>
      <li class="huahua_pic" style="height:440px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow5.jpg">
      </li>
      <li class="huahua_pic" style="height:440px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow6.jpg">
      </li>
      <li class="huahua_pic" style="height:459px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/hua8.jpg">
      </li>
      <li class="huahua_pic" style="height:459px;">
        <img class="pdd-lazy-image loaded" style="width:100%;height:100%" src="../../public/img/modelshow7.jpg">
      </li>
      <div class="daodi">已经到底啦~</div>
    </div>  -->
    <div class="kong"></div>
    <!--底部按钮-->
    <div class="foot-details">
      <div class="foot-dtl1">
        <img src="../../public/img/more.png">
        <p>更多</p>
      </div>
      <div class="foot-dtl1">
        <img @click="collect" :src="imageUrl">
        <p>{{imageText}}</p>
      </div>
      <div class="foot-dtl1">
        <img src="../../public/img/ke.png">
        <p>客服</p>
      </div>
      <div class="dandugm">
        <span style="font-size:17px">
          <i style="font-size:16px">¥</i>
           {{list.spec[0].line_price}}
        </span>
        <span>单独购买</span>
      </div>
      <div class="pind" @click="gopin(goods_id)">
        <span style="font-size:17px">
          <i style="font-size:16px">¥</i>
          {{list.spec[0].goods_price}}
        </span>
        <span>发起拼单</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        imageUrl:"../../img/sc.png",
        imageText:"收藏",
        goods_id:'',
        list:{detail:{
          goods_name:'',
          sales_actual:0,
          sales_initial:0,
          content:"dd"
          },
          spec:[
            {goods_price:0}
            ]
          }
      }
    },
    methods:{
      iscollect(){
        this.goods_id = this.$router.history.current.query.goods_id;
        console.log(this.goods_id);
        this.axios.get('product/iscollect',{params:{
          goods_id:this.goods_id
        }}).then(res=>{
          if(res.data.code==200){
            this.imageUrl="../../img/ysc.png";
            this.imageText="已收藏";
          }else{
            this.imageUrl="../../img/sc.png";
            this.imageText="收藏";
          }
        });
      },
      collect(){
        this.goods_id = this.$router.history.current.query.goods_id;
        console.log(this.goods_id);
        this.axios.get('product/collect',{params:{
          goods_id:this.goods_id
        }}).then(res=>{
          console.log(res);
          if(res.data.code == 200){
            if(this.imageText=="已收藏"){
              this.imageUrl="../../img/sc.png";
              this.imageText="收藏";
            }else{
              this.imageUrl="../../img/ysc.png";
              this.imageText="已收藏";
            }
            
          }else{
            this.$toast(res.data.msg);
          }
        });
      },
      gopin(id){
         this.axios.get('user/sessiondata').then(res => {
                if (res.data.code == 200) {
                    this.$router.push({path:"/Order",query:{goods_id:id}})
                } else  {
                    this.$toast("您还没有登录,请先登录");
                    this.$router.push("/Login");
                }
            });
      },
      getDetail(){
        this.goods_id = this.$router.history.current.query.goods_id;
        console.log(this.goods_id);
        this.axios.get("product/detail",{params:{
          goods_id:this.goods_id
        }}).then(res=>{
          //2:获取服务器返回结果
          //3:将返回结果保存
          this.list = res.data.data;
          console.log(this.list);
          // var detail = document.getElementById("detail");
          // detail.innerHTML = this.list.detail.content;
        })
      }
    },
    created(){
      this.getDetail();
      this.iscollect();
    }
  }
</script>
<style scoped>
  *{
    padding:0;margin:0;
    box-sizing:border-box;
  }
  ol,ul{list-style:none;}
  .kong{width:100%;height:54px;}
  .det-tabbar{
    background-color:#f4f4f4;
  }
  .f2f2f2{
    border-top:1px solid #f2f2f2;
    margin-top:1px;
    margin-left:12px;
  }
  .fl{float:left}
  .fr{float:right}
  .w-100{width:100%;}
  .header{
    background:#fff;
    color:#000;
    }
  .swipe{
    width:100%;
    max-width:768px;
    height:375px;
    position:relative;
  }
  .swipe>img{
    width:100%;
    max-width:768px;
    height:48px;
    position:absolute;
    left:0;
    bottom:0;
  }
  .container{overflow:hidden;}
  .content{
    position:relative;
    width:100%;
    background-color:#fff;
    margin-bottom:.08px;
  }
  .contents{
    overflow:hidden;
    height:26px;
    color:#e02e24;
    box-sizing:content-box;
    padding:11px 12px 0 10px;
  }
  .price{
    height:28px;
    line-height:28px;
    font-size:28px;
    font-weight:700;
    letter-spacing:0.1px;
  }
  .price i{
    font-size:15px;
    margin:2px;
  }
  .secspan{
    width:170px;
    height:21px;
    line-height:21px;
    font-size:13px;
    background-color:#fee74f;
    color:#000;
    border-radius:2px;
    padding:0 5px;
    margin-left:5px;
  }
  .thdspan{
    color:#58595b;
    font-size:13px;
    text-align:right;
    padding-left:20px;
  }
  .pro-detail{
    position:relative;
    width:100%;
    font-size:15px;
    line-height:1.4;
    color:#151516;
    overflow:hidden;
    font-weight:700;
    text-align:justify;
    padding:6px 12px 1px;
  }
  .detail1{
    display:block;
    max-height:41px;
    overflow:hidden;
  }
  .xbtj{
    display:inline-block;
    max-width:100%;
    margin-right:2px;
    min-height:11px;
    max-height:20px;
    position:relative;
    top:2px;
  }
  .detail2{
    margin-right:6px;
    letter-spacing:0.1px;
  }
  .detail3{
    display:inline-block;
    position:relative;
    height:16px;
    line-height:16px;
    padding:0 2px;
    border-radius:2px;
    background-color:#25b513;
    top:-2px;
    font-size:12px;
    letter-spacing:0;
    color:#fff;
    font-weight:400;
    vertical-align:middle;
  }
  .content2{
    background-color:#fff;
  }
  .row4s{
    padding:0 12px;
    position:relative;
    font-size:13px;
    line-height:38px;
    color:#58595b;
    height:38px;
    display:flex;
    flex-wrap:wrap;
  }
  .row1s{
    margin-left:8px;
    margin-top:1px;
    display:flex;
    flex-shrink:0;
  }
  .ml8{
    margin-left:-8px;
  }
  .dian{
    margin-right:5px;
  }
  .yjt{
    position:absolute;
    top:0;
    right:6px;
    color:#000;
    height:100%;
    flex-grow:1;
    min-width:15px;
    flex-direction:row-reverse;
    opacity:0.15;
  }
  .yjt span img{
    width:24px;
    margin-top:7px;
  }
  .changxb{
    position:relative;
    font-size:13px;
    line-height:38px;
    color:#58595b;
    height:38px;
    padding:0 10px 0 12px;
  }
  .cxbang{
    height:16px;
    margin-right:4px;
    margin-top:8px;
    max-width:100%;
    width:auto;
    vertical-align:top;
  }
  .foot-details{
    position:fixed;
    display:flex;
    width:100%;
    max-width:758px;
    height:54px;
    bottom:0;
    background-color:#fff;
    z-index:10001;
  }
  .foot-dtl1{
    position:relative;
    width:45px;
    height:100%;
    border-top:1px solid #eaeaea;
    border-right:none;
  }
  .foot-dtl1 img{
    display:block;
    width:23px;
    height:23px;
    align:center;
    position:absolute;
    top:5px;
    left:10px;
  }
  .foot-dtl1 p{
    display:block;
    width:100%;
    height:12px;
    line-height:12px;
    font-size:11px;
    color:#58595b;
    bottom:8px;
    text-align:center;
    position:absolute;
  }
  .dandugm{
    width:120px;
    padding-top:10px;
    background-color:#f3aba7;
    position:relative;
    height:100%;
    color:#fff;
    text-align:center;
  }
  .dandugm span{
    display:block;
    font-weight:500;
    height:17px;
    margin-bottom:4px;
  }
  .pind{
    width:120px;
    padding-top:10px;
    background-color:#e02e24;
    position:relative;
    height:100%;
    color:#fff;
    text-align:center;
  }
  .pind span{
    display:block;
    font-weight:500;
    height:17px;
    margin-bottom:4px;
  }
  .canyupd{
    position:relative;
    width:100%;
    max-width:768px;
    margin-top:8px;
    background:#fff;
  }
  .canyu{
    height:38px;
    line-height:38px;
    color:#151516;
    font-size:15px;
    padding:0 10px 0 12px;
    border-bottom:1px solid #f2f2f2;
    position:relative;
    width:100%;
  }
  .ckmore{
    height:38px;
    line-height:38px;
    display:inline-block;
    float:right;
    font-size:13px;
    color:#9c9c9c;
  }
  .pinzhe{
    max-height:120px;
    overflow:hidden;
    padding:0 0 0 12px;
    width:100%;
  }
  .menpo{
    position:relative;
    width:100%;
    height:60px;
    padding:7px 0;
    border-bottom:1px solid #f2f2f2;
  }
  .first_pp{
    position:relative;
    width:231px;
    height:45px;
    float:left;
    padding:6px 0;
  }
  .first_min{
    position:absolute;
    left:0;
    top:0;
    width:125px;
    font-size:15px;
    color:#151516;
    line-height:46px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .first_cha{
    text-align:right;
    position:absolute;
    right:0;
    top:0;
    line-height:46px;
    font-size:13px;
    color:#151516;
  }
  .first_go{
    width:68px;
    height:30px;
    line-height:30px;
    color:#fff;
    position:absolute;
    top:15px;
    right:0;
    font-size:14px;
    text-align:center;
    border-radius:4px;
    background-color:#e02e24;
    margin-right:12px;
    box-sizing:content-box;
  }
  .sec_go{
    width:68px;
    height:30px;
    line-height:30px;
    color:#fff;
    position:absolute;
    top:75px;
    right:0;
    font-size:14px;
    text-align:center;
    border-radius:4px;
    background-color:#e02e24;
    margin-right:12px;
    box-sizing:content-box;
  }
  .pjia{
    position:relative;
    width:100%;
    padding:0 0 8px;
    margin-top:8px;
    background-color:#fff;
  }
  .pjia_tou{
    position:relative;
    width:100%;
    padding:0 10px 0 12px;
    border-bottom:1px solid #f2f2f2;
  }
  .pjia_head{
    position:relative;
    width:100%;
    height:39px;
    font-size:0;
  }
  .pjia_head_lefttext{
    position:relative;
    float:left;
    height:100%;
    width:180px;
    line-height:40px;
    font-size:15px;
    color:#151516;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align:left;
  }
  .pjia_head_righttext{
    display:inline-block;
    float:right;
    height:100%;
    line-height:39px;
    font-size:13px;
    color:#9c9c9c;
  }
  .pjia_lei{
    width:100%;
    max-width:768px;
    padding:0 12px;
    position:relative;
    font-size:0;
    overflow:hidden;
  }
  .pjia_xing{
    width:100%;
    display:inline-block;
    max-height:43px;
  }
  .zpin{
    margin-top:12px;
    padding:0 8px;
    font-size:14px;
    height:30px;
    width:auto;
    float:left;
    margin-right:8px;
    line-height:30px;
    border-radius:4px;
    max-width:160px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .zhilhh{
    margin-top:12px;
    padding:0 8px;
    font-size:14px;
    height:30px;
    width:auto;
    float:left;
    margin-right:8px;
    line-height:30px;
    border-radius:4px;
    max-width:160px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .pjia_content{
    position:relative;
    width:100%;
    padding:6px 0 0 12px;
  }
  .pjia_first{
    position:relative;
    width:100%;
    padding-bottom:8px;
  }
  .pjia_min{
    display:flex;
    position:relative;
    height:25px;
    margin:6px 12px 4px 0;
    line-height:25px;
    justify-content:space-between;
  }
  .pjia_1strow{
    overflow:hidden;
  }
  .pjia_tx1,.pjia_tx2{
    position:relative;
    float:left;
    display:block;
    font-size:14px;
    background-image:url("../../public/img/ren.jpg");
    background-position:50%;
    background-size:contain;
    background-repeat:no-repeat;
    overflow:hidden;
    height:24px;
    width:24px;
    border-radius:100%;
    margin-right:7px;
  }
  .pjia_tx1:after{
    content:"";
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
    background-color:ragb(0,0,0,.04);
  }
  .pjia_mingzi{
    position:relative;
    float:left;
    display:block;
    font-size:14px;
    color:#151516;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align:left;
  }
  .pjia_text{
    position:relative;
    overflow:hidden;
    width:100%;
    max-height:42px;
    font-size:14px;
    color:#58595b;
    text-overflow:ellipsis;
    word-break:break-all;
    text-align:left;
    line-height:21px;
    padding-right:12px;
  }
  .pjia_second{
    padding-top:6px;
    border-top:1px solid #f2f2f2;
    position:relative;
    width:100%;
  }
  .pjia_tx2{
    background-image:url("../../public/img/gou.jpg")
  }
  .pro_dtl{
    max-width:768px;
    margin:8px auto 0;
    background-color:#fff;
    overflow-x:hidden;
  }
  .pro_dtl p{
    height:40px;
    line-height:40px;
    padding:0 12px;
    font-size:15px;
    color:#151516;
    text-align:left;
  }
  .pro_dtl_list_attr{
    margin:12px;
    background-color:#f4f4f4;
    padding:7px 12px;
    border-radius:3px;
    font-size:14px;
  }
  .pro_dtl_list_attr .attr-item:first-child{
    margin-top:0;
  }
  .pro_dtl_list_attr .attr-item{
    max-height:41px;
    overflow:hidden;
    color:#9c9c9c;
    line-height:21px;
    margin-bottom:4px;
  }
  .pro_dtl_list_attr .attr-item .attr-key{
    display:inline-block;
    width:86px;
    margin-right:12px;
    vertical-align:text-top;
    line-height:20px;
  }
  .pro_dtl_list_attr .attr-item .attr-value{
    display:inline-block;
    color:#151516;
    width:213px;
    vertical-align:text-top;
    line-height:20px;
  }
  .pro_dtl_list_attr .attr-item:last-child{
    margin-bottom:0;
  }
  .show-all-sttr  img{
    width:15px;
    height:19px;
    display:inline-block;
    position:relative;
    top:5px;
    opacity:0.4;
  }
  .huahua{
    margin:10px 10px 14px;
    background-color:#fff;
    padding:0;
    line-height:20px;
    border-radius:3px;
  }
  .huahuavip{
    text-align:justify;
    word-wrap:break-word;
    font-size:14px;
    line-height:21px;
    color:#666;
  }
  .huahua_pic{
    position:relative;
    border:none;
    overflow:hidden;
    background-color:#fafafa;
  }
  .pdd-lazy-image{
    min-width:1px;
    min-height:1px;
  }
  .daodi{
    color:#9c9c9c;
    text-align:center;
    margin:5px auto;
  }
</style>