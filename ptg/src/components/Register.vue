<template>
    <div class="app-register">
        <mt-button class="login" @click="login" style="background-color:#e02e24;color:white;" >返回</mt-button>
        <h3 style="color:red">拼夕夕用户注册</h3>
        <mt-field label="用户名" class="user" v-model="user_name" :placeholder="unameholder" @blur.native.capture="checkuser">  </mt-field>
        <div id="info"  style="margin-left:118px"></div>
        <mt-field label="密码" class="user" id="upwd" v-model="password" type="password" @blur.native.capture="checkupwd"   :placeholder="upwdholder"></mt-field>
        <mt-field label="确认密码" class="user" id="Reupwd" v-model="Reupwd" type="password" @blur.native.capture="checkReupwd"  :placeholder="upwdholderAgain"></mt-field>
        <div id="info_upwd"  style="margin-left:118px"></div>
        <div class="phone">
        <mt-field label="手机号码" class="user" v-model="phone" id="phone" :placeholder="phoneholder" @blur.native.capture="checkphone" ></mt-field><button class="captcha" @click="SetImage" style="color:#e02e24" :class="{disabled: !this.canClick}" >{{content}}</button>
        </div>
          <div id="infoPhone"  style="margin-left:118px"></div>
          <mt-field class="user" :placeholder="upwdholderlabel"  label="验证码" @blur.native.capture="checklabel"  v-model="MsgCode"></mt-field>
           <div id="info_label"  style="margin-left:118px"></div>
           <div style="margin:10px">性别
         <input type="radio" value="1" v-model="gender"/><label >先生</label>      
         <input type="radio" value="0" v-model="gender" /><label >女士</label>  
        </div>
        <mt-button size="large" @click="register" style="background-color:#e02e24;color:white; font-weight: 700;font-size:24px">注册</mt-button>
        <!-- 弹窗 -->
        <div id="myModal" class="modal">

            <!-- 关闭按钮 -->
            <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>

            <!-- 弹窗内容 -->
            <!-- 属性设置为模态框 -->
            <img class="modal-content" id="img01"  ref="imgYzm" @click="editCaptcha">

            <!-- 输入框 -->
            <div id="caption">
              <mt-field placeholder="请输入计算结果" v-model="sum" style="border:1px solid #ccc"></mt-field>
            
              <mt-button @click="send" class="send" style="background-color:#e02e24;color:black" >确定</mt-button>
            </div>
            
        </div>
      <!-- 弹窗 -->
      </div>
     
</template>
<script>
export default {
  data() {
    return {
       unameholder:'请输入用户名',
       upwdholder: '请输入密码',
      upwdholderAgain: '请再次输入密码',
       phoneholder:'请输入手机号',
       upwdholderlabel:'请输入手机验证码',
       user_name: '',
       password: '',
       Reupwd: '',
       phone:'',
       gender:'1',
       captcha:"",
       sum:'',
       MsgCode:'',
        content: '获取验证码',
       totalTime: 60,
      canClick: true ,
      canSetImage:true
    }},
  methods: {
   checkuser(){
           var reg = /^[a-z0-9]{3,12}$/i;
            if (!reg.test(this.user_name)) {
        this.$toast("用户名格式不正确");
        return;
           }else{
           var infoUser_name=document.getElementById("info");
            if(!this.user_name){
             var message="请输入用户名";
             infoUser_name.innerHTML=message;
               infoUser_name.style.color="red";
            }else{
             var url='http://pxx.weixihang.com/user/checkuser?user_name='+this.user_name;
             this.axios.get(url).then(res=>{
                  // if (res.data.code == 200) {
                  //  var message="用户名可以使用";
                  //  infoUser_name.innerHTML=message;
                  //  infoUser_name.style.color="blue";
                  // }else 
                  if (res.data.code == 201){
                    var message="用户名已被注册";
                    infoUser_name.innerHTML=message;
                    infoUser_name.style.color="red";
                  }else{
                      var message="";
                    infoUser_name.innerHTML=message;
                  }
             })
            }
           }
    },
   checkupwd(){
       var reg = /^[a-z0-9]{3,12}$/i;
        if(!reg.test(this.password)){
          this.$toast("用户密码格式不正确");
          return;
        }
    },
   checkReupwd(){
                //var info_upwd_name=document.getElementById("")
                 if(this.password!==this.Reupwd){
                  var message="两次输入的密码不一致";
                info_upwd.innerHTML=message;
                  info_upwd.style.color="red";
            }else{
              var message="";
                info_upwd.innerHTML=message;
                info_upwd.style.color="";
            }
    },
    checkphone(){
              var infoPhone=document.getElementById("infoPhone");
  
              if(!this.phone){
                var PhoneMessage="请输入手机号";
                infoPhone.innerHTML=PhoneMessage;
                  infoPhone.style.color="red";
              }else {
                 var regPhone=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
                if(!regPhone.test(this.phone)){
                 var PhoneMessage="请输入正确的手机号";
                infoPhone.innerHTML=PhoneMessage;
                infoPhone.style.color="red";
                return;
                } 
                else{
             var url='http://pxx.weixihang.com/user/checkphone?phone='+this.phone;
             this.axios.get(url).then(res=>{
                //   if (res.data.code == 200) {
                //   var PhoneMessage="手机号可以使用";
                // infoPhone.innerHTML=PhoneMessage;
                //   infoPhone.style.color="blue";
                //   }else
                   if (res.data.code == 201){
                    var PhoneMessage="该手机号已被注册";
                infoPhone.innerHTML=PhoneMessage;
                  infoPhone.style.color="red";
                  }else{
                     var PhoneMessage="";
                infoPhone.innerHTML=PhoneMessage;
                  }
                
             })
             
                }}
    },
    checklabel(){
         var  info_label=document.getElementById("info_label");
         if(this.MsgCode==""&this.MsgCode.length!==6){
              var labelMessage="请输入六位验证码";
               info_label.innerHTML=labelMessage;
                  info_label.style.color="red";
         }else{
            var labelMessage="";
           info_label.innerHTML=labelMessage;
         }

    },
      editCaptcha () {
      this.$refs.imgYzm.src = 'http://pxx.weixihang.com/captcha/getCode?d='+Math.random()
    },
    send(){
         var Url='http://pxx.weixihang.com/sms/send?phone='+this.phone+'&captcha='+this.sum
            this.axios.get(Url).then(res=>{
                if (res.data.code == 200) {
                  // 获取DIV弹窗
                     var modal = document.getElementById('myModal');
                     modal.style.display = "none"; //将模态框属性设置为不可见
                     this.$toast("验证码发送成功，请注意查收");
                     console.log(1);
                     if (!this.canClick) return  
                         this.canClick = false;
                         this.content = this.totalTime + 's后重新发送';
                         let clock = window.setInterval(() => {
                         this.totalTime--
                         this.content = this.totalTime + 's后重新发送'
                         if (this.totalTime < 0) {
                         window.clearInterval(clock)
                         this.content = '重新发送验证码';
                         this.totalTime = 60;
                          this.canClick = true  //这里重新开启
                         }
                        },1000)
                    }else{
                   this.$toast(res.data.msg);
                }
            })
      

    },
     SetImage() {
       var infoPhone=document.getElementById("infoPhone");
        if (infoPhone.innerHTML=="该手机号已被注册") return; 
        if(!this.canClick) return;  
        // 获取DIV弹窗
        
        var modal = document.getElementById('myModal');

        // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
        var modalImg = document.getElementById("img01"); //获取弹出图片元素
        var captionText = document.getElementById("caption"); //获得文本描述
         //注册原图片点击事件
            modal.style.display = "block"; //此元素将显示为块级元素，此元素前后会带有换行符。
            this.$refs.imgYzm.src = 'http://pxx.weixihang.com/captcha/getCode?d='+Math.random()
        // 获取 <span> 元素，样式设置为关闭按钮
        var span = document.getElementsByClassName("close")[0];

        // 当点击 (x), 关闭弹窗
        span.onclick = function () {
         modal.style.display = "none"; //将模态框属性设置为不可见
        }
    },
    register() {
      var u = this.user_name;
      var ph=this.phone;
      var p=this.password;
      var g=this.gender;
       var captcha = this.captcha;
         var msg1=document.getElementById("info").innerHTML;
         var msg2=document.getElementById("infoPhone").innerHTML;
         var msg3=document.getElementById("info_upwd").innerHTML;
      
   
        if( msg1== "" && msg2 == "" && msg3=="" ){
              var url = "user/register";
      var data='user_name='+u+'&password='+this.$md5(p)+'&phone='+ph+'&gender='+g+'&MsgCode='+this.MsgCode;
      console.log(data);
      this.axios.post(url,data).then(res => {
        if (res.data.code == 200) {
          this.$toast("注册成功");
          this.$router.push("/login");
          console.log(res);
        } else {
          this.$toast("注册失败："+res.data.msg);
        }
      });
        }
        // else{
        //     this.$toast("请检查输入信息");
        // }
    },
  
    login() {
      this.$router.push("/login");
    }
  },
  watch:{
    phone(){
      if(this.phone.length == 11)  this.checkphone();
    },
    MsgCode(){
       if(this.MsgCode.length==6)  this.checklabel();
    }
  }
};
</script>
<style>
.user_name{
  display: flex
}
.info{
  position: left;
 
}
h3 {
  text-align: center;
}
.user{
 border-bottom:1px solid #ccc;
}
.phone{
  display: flex;
}
captcha{
  display: block;
  width: 50px;
  height: 100%;
}
.disabled{
 background-color: #ddd;
 border-color: #ddd;
 color:#57a3f3;
 cursor: not-allowed;}
/* 弹窗背景 */
    .modal {
      text-align: center;
        display: none;      
        position: fixed;     
        z-index: 1234;   
        margin-top: 80px;   
        left: 30px;
        right: 30px;
        top: 0;
        width: 80%;    
        height:32%;
        border:1px solid black;       
        overflow: auto;
        background-color:rgb(204, 204, 204);
            opacity:0.9;
        border-radius: 4%;
        
    }

    /* 设置弹出图片的样式 */
    .modal-content {
        margin: auto;
        display: block;
        width: 70%;
        max-width: 700px;
    
    }

    /* 设置文本内容的样式 */
    #caption {
        margin: auto;
        display: block;
        width:60%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 180px;
        
    }


    /* 设置span标签的关闭按钮样式 */
    .close {
        position: absolute;
        top: 0px;
        right: 0px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
    }

    .close:hover,
    .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }
    .send{
      margin-top:20px;
    }
</style>
