<template>
    <div>
        <div class="all">
            <mt-header title="我的资料" style="background-color:transparent;color:#000;font-size:16px;">
                <router-link to="/index" slot="left">
                <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
        <div class="information_details">
                <ul class="details">
                    <li class="head_portrait">
                        <div class="left">
                            <span>头像</span>
                        </div>
                        <div class="right">
                            <img src="../../public/image/2.png">
                        </div>
                    </li>
                    <li class="name">
                        <div class="left">
                            <span>昵称</span>
                        </div>
                        <div class="right">
                            <span id="right">{{userInfo.user_name}}</span>
                        </div>
                    </li>
                    <li class="sex">
                        <div class="left">
                            <span>性别</span>
                        </div>
                        <div class="right">
                            <span>{{userInfo.gender==1?'男':'女'}}</span>
                        </div>
                    </li>
                    <li class="area">
                        <div class="left">
                            <span>电话</span>
                        </div>
                        <div class="right">{{userInfo.phone}}</div>
                    </li>
                    <li class="birthday">
                        <div class="left">
                            <span>生日</span>
                        </div>
                        <div class="right">
                            <span>未填写，填写后会匹配星座</span>
                        </div>
                    </li>
                    <li class="signature">
                        <div class="left">
                            <span>个性签名</span>
                        </div>
                        <div class="right">
                            <span>主人很懒，什么都没有留下...</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="quit" @click="quit">
                <span>退出登录</span>   
            </div>
        </div>
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
        quit(){
            this.axios.get('user/logout').then(res => {
                if (res.data.code == 200) {
                    this.$router.push("/Login")
                } else  {
                    this.$router.push("/Login")
                }
            });
        },
        getUser(){
            this.axios.get('user/sessiondata').then(res => {
                if (res.data.code == 200) {
                    this.userInfo = res.data.data;
                    console.log(res.data.data);
                } else  {
                    this.$router.push("/Login");
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
    }
    .all{
        width:100%;
        min-height:100%;
        display:flex;
        flex-direction:column;
        background-color:transparent;
    }
    .basic_information{
        width:100%;
        height:48px;
        padding-top:13px;
        padding-left:12px;
        text-align:left;
        font-size:16px;
        color:#58595b;
    }
    .information_details{
        margin-bottom:8px;
        width:100%;
        background-color:#fff;
    }
    .information_details>ul{
        width:100%;
        list-style:none;
    }
    li{
        vertical-align:bottom;
        border:none;
        list-style:outside none none;
    }
    .head_portrait{
        height:72px;
        width:100%;
        padding-left:12px;
        overflow:hidden;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .name,.sex,.area,.birthday,.signature{
        position:relative;
        padding-left:12px;
        width:100%;
        overflow:hidden;
        height:45px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .head_portrait>div.left{
        height:100%;
        color:#151516;
        font-size:16px;
        display:inline-block;
        padding-top:20px;
    }
    .head_portrait>div.right{
        padding-right:10px;
    }
    .name>.left,.sex>.left,.area>.left,.birthday>.left,.signature>.left{
        color:#151516;
        font-size:16px;
        display:inline-block;
    }
    .name>.right,.sex>.right,.area>.right,.birthday>.right,.signature>.right{
        color:#9c9c9c;
        font-size:16px;
        padding-right:10px;
    }
    .details>li:before{
        content:"";
        position:absolute;
        top:0;
        left:12px;
        width:100%;
        height:1px;
        border-top:1px solid rgba(0,0,0,.05);
    }
    .quit{
        text-align:center;
        background:#fff;
        border-top:1px solid rgba(0,0,0,.05);
        padding:10px 0;
    }
    .quit>span{
        color:#151516;
        font-size:16px;
    }
</style>