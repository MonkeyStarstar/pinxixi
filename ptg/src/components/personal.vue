<template>
<div>
    <div class="personal_head">
        <div class="info">
            <div class="profile-wrapper">
                <div class="img-wrapper">
                    <div class="avatar" @click="goto">
                        <img src="../../public/image/2.png" style="width:50px;height:50px;margin-right:15px;">
                    </div>
                </div>
                <div class="nickname-wrapper">
                    <p class="nickname" id="nickname" style="color:#ffffff;">
                        {{userInfo.user_name}}
                        <img src="../../public/image/3.png" style="width:18px;height:18px;margin-bottom:-3px;">
                    </p>
                    <div class="medal-entrance" style="color:#ffffff;font-size:14px;">
                        勋章墙&nbsp;&gt;
                    </div>
                </div>
            </div>
            <div class="entrances-wrapper">
                <div class="part-return-entrance">
                    <img src="../../public/image/red_packet.png" style="width:22px;height:22px;">
                    <span>拼单返现</span>
                </div>
            </div>
        </div>
        <div class="pincard-entrance">
            <div class="father">
                <div class="title-section">
                    省钱月卡
                    <span class="title-divider">|</span>
                    <span class="title-description">帮你省194元</span>
                </div>
                <div style="display:inline-block">
                    <span class="list-info">
                        <span class="title" style="color:#FFFFFF;background:#E02E24">领4张5元无门槛</span>&nbsp;&gt;
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="order-menu">
        <div class="order-title">
            <div class="my-orders">我的订单</div>
            <div class="others">查看全部&nbsp;&gt;</div>
        </div>
        <div class="top-menu-wrapper" id="top">
            <div class="top-menu">
                <div class="top-menu-item">
                    <img src="../../public/image/wait_pay.png">
                    <div>待付款</div>
                </div>
                <div class="top-menu-item">
                    <img src="../../public/image/wait_share.png"> 
                    <div>待分享</div>
                </div>
                <div class="top-menu-item">
                    <img src="../../public/image/wait_send.jpg"> 
                    <div>待发货</div>
                </div>
                <div class="top-menu-item">
                    <img src="../../public/image/wait_receive.png"> 
                    <div>待收货</div>
                </div>
                <div class="top-menu-item">
                    <img src="../../public/image/wait_appraise.jpg"> 
                    <div>待评价</div>
                </div>
            </div>
        </div>
    </div>
    <div class="middle-menu-wrapper" id="middle">
        <div class="middle-menu">
            <div class="middle-menu-item">
                <img src="../../public/image/discount_coupon.png">
                <div>优惠券</div>
            </div>
            <div class="middle-menu-item" @click="goCollect">
                <img src="../../public/image/goods_collection.png">
                <div>商品收藏</div>
            </div>
            <div class="middle-menu-item">
                <img src="../../public/image/browsing_history.png">
                <div>店铺收藏</div>
            </div>
            <div class="middle-menu-item">
                <img src="../../public/image/browsing_history.jpg">
                <div>历史浏览</div>
            </div>
            <div class="middle-menu-item">
                <img src="../../public/image/after_sale.jpg">
                <div>退款售后</div>
            </div>
        </div>
    </div>
    <div class="bottom-menu-wrapper" id="bottom">
        <div class="bottom-menu">
            <div>
                <div class="bottom-menu-item">
                    <img src="../../public/image/person_red_packet.jpg">
                    <div>新人红包</div>
                </div> 
                <div class="bottom-menu-item">
                    <img src="../../public/image/orchard.jpg">
                    <div>多多果园</div>
                </div> 
                <div class="bottom-menu-item">
                    <img src="../../public/image/bargain.jpg">
                    <div>砍价免费拿</div>
                </div>
                <div class="bottom-menu-item">
                    <img src="../../public/image/get_cash.jpg">
                    <div>天天领现金</div>
                </div>
                <div class="bottom-menu-item">
                    <img src="../../public/image/eliminate.jpg">
                    <div>多多爱消除</div>
                </div> 
            </div>
            <div> 
                <div class="bottom-menu-item">
                    <img src="../../public/image/pasture.jpg">
                    <div>多多牧场</div>
                </div>
                <div class="bottom-menu-item">
                    <img src="../../public/image/train_ticket.jpg">
                    <div>火车票</div>
                </div>
                <div class="bottom-menu-item">
                    <img src="../../public/image/receiver_address.jpg">
                    <div>收货地址</div>
                </div>
                <div class="bottom-menu-item">
                    <img src="../../public/image/main_appraise.jpg">
                    <div>我的评价</div>
                </div> 
                <div class="bottom-menu-item">
                    <img src="../../public/image/customer_service.jpg">
                    <div>官方客服</div>
                </div>  
            </div>
            <div> 
                <div class="bottom-menu-item"  @click="goto">
                    <img src="../../public/image/install.jpg">
                    <div>设置</div>
                </div> 
            </div> 
        </div>
    </div>
    <!--
    <div class="foot-menu-wrapper" id="footer">
        <div class="foot-menu">
            <div class="foot-menu-item">
                <img src="../../public/image/home_page.jpg">
                <div>首页</div>
            </div>
            <div class="foot-menu-item">
                <img src="../../public/image/recommend.jpg">
                <div>推荐</div>
            </div> 
            <div class="foot-menu-item">
                <img src="../../public/image/chat.jpg">
                <div>聊天</div>
            </div> 
            <div class="foot-menu-item">
                <img src="../../public/image/person_center.jpg">
                <div>个人中心</div>
            </div>    
        </div>   
    </div>
    -->
</div>
</template>
<script>
export default{
    data(){
        return {
            userInfo:{user_name:''}
        }
    },
    methods:{
        goto(){
            this.$router.push("/personal_data")
        },
        goCollect(){
            this.$router.push("/collect")
        },
        getUser(){
            this.axios.get('user/sessiondata').then(res => {
                if (res.data.code == 200) {
                    this.userInfo = res.data.data;
                } else  {
                    var status = document.getElementById("nickname")
                    status.innerHTML = `<a style="text-decoration:none;color:#fff" href="#/Login">请登录</a>`;
                }
            });
        }
    },
    created(){
        this.getUser();
    }
}
</script>
<style scoped>
    *{
        margin:0px;
        padding:0px;
        border:0;
        box-sizing:border-box;
        outline:0;
    }
    a{
        text-decoration:none;
    }
    .personal_head{
       width:100%;
       padding-top:10px;
       background-size:cover;
       background-position:top;
       background-image:url("../../public/image/1.png");
       position:relative;
    }
    .personal_head{
       width:100%;
       height:135px;
    }
    .part-return-entrance{
        width:100px;
        height:30px;
        background-color:#fff;
        border-radius:15px;
        font-size:.13rem;
        color:#151516;
        text-align:center;
        border:none;
    }
    .part-return-entrance img{
        margin-top:2px;
        margin-left:8px;
    }
    .part-return-entrance span{
        width:70%;
        font-size:14px;
        margin-right:5px;
    }
    .part-return-entrance{
        display:flex;
        padding:0 -15px;
        text-align:center;
        align-items:center;
    }
    .info,.profile-wrapper{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .info{
        padding:20px 20px;
        height:64px;
        padding-bottom:15px;
    }
    .nickname{
        font-weight:bolder;
        padding-bottom:5px;
        font-size:16px;
    }
    .father{
        width:80%;
        height:46px;
        background:rgba(255,255,255,0.9);
        position:absolute;
        bottom:-1px;
        left:10%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        border-radius:5px 5px 0 0;
        font-size:15px;
        color:#e02e24;
    }
    .title-divider{
        margin-right:5px;
    }
    .title{
        padding:2px 7px;
        border-radius:15px;
        font-size:13px;
    }
    .order-menu{
        padding-bottom:7px;
        background:#fff;
    }
    .order-title{
        display:flex;
        align-items:center; 
        margin:0px 10px 0px;
        padding-top:15px;
        position:relative;
        padding-bottom:10px;
    }
    .order-menu .order-title .my-orders{
        color:#151516;
        font-size:18px;
    }
    .others{
        color:#999;
        font-size:14px;
        position:absolute;
        right:0px;
        bottom:13px;
    }
    .top-menu,.middle-menu,.bottom-menu>div,.footer-items{
        display:flex;
        justify-content:space-between;
        align-items:center;
        text-align:center;
    }
    .top-menu-wrapper,.middle-menu-wrapper,.bottom-menu-wrapper,.foot-menu-wrapper{
        padding:5px 0px 5px;
    }
    .top-menu-item>img{
        width:26px;
        height:26px;
    }
    .top-menu-item>div,.middle-menu-item>div,.bottom-menu-item>div{
        margin-top:5px;
        color:#58595b;
        font-size:14px;
    }
    .middle-menu-item>img{
        width:24px;
        height:24px;
    }
    .top-menu-item,.middle-menu-item,.bottom-menu-item{
        width:20%;
    }
    .bottom-menu>div{
        margin-top:0px;
        margin-bottom:20px;
    }
    .common-footer-module{
        position:absolute;
        bottom:0px;
        padding-top:10px;
    }
    .middle-menu{
        background-color:#fff;
        height:89px;
        margin-top:5px;
        padding:7px 0 18px;
        overflow:hidden;
        position:relative;
        width:100%;
    }
    .bottom-menu{
       background-color:#fff;
       padding-top:10px; 
    }
    .foot-menu{
        width:100%;
        height:50px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        text-align:center;  
        background-color:#fff;
    }
    .foot-menu-wrapper{
        padding:0px;
    }
</style>
