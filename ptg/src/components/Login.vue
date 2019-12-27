<template>
    <div class="app-login">
        <div class="head" >
     <img class="logo"   src="../assets/logo.jpg" alt="">
      <mt-button class="reg" @click="reg" style="background-color:#e02e24;color:white; ">注册</mt-button>
     </div>
   <mt-field label="用户名" class="user_name" :placeholder="unameholder" v-model="user_name"></mt-field>
    <mt-field label="密码" class="user_name" :placeholder="upwdholder" v-model="password" type="password"></mt-field>
    <mt-field label="验证码" placeholder="输入计算结果" v-model="captcha"><img src="" @click="editCaptcha" alt="captcha" ref="imgYzm"></mt-field>
    <mt-button size="large" @click="login" class="login" style="background-color:#e02e24;color:white; font-weight: 700;font-size:24px" >登录</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      unameholder: "请输入用户名",
      upwdholder: "请输入密码",
      user_name: "",
      password: "",
      captcha:""
    };
  },
  methods: {
    editCaptcha () {
      this.$refs.imgYzm.src = 'http://pxx.weixihang.com/captcha/getCode?d='+Math.random()
    },
    login() {
      var u = this.user_name;
      var p = this.password;
      var captcha = this.captcha;
      var reg = /^[a-z0-9]{3,12}$/i;
      if(u==""){
        this.$toast("请输入用户名");
              return;
      }
      if (!reg.test(u)) {
        this.$toast("用户名格式不正确");
        return;
      }
       if(p==""){
        this.$toast("请输入密码");
              return;
      }
      if (!reg.test(p)) {
        this.$toast("密码格式不正确");
        return;
      }
      var url = "user/login";
      var data = 'user_name='+u+'&password='+this.$md5(p)+'&captcha='+captcha;
      this.axios.post(url, data).then(res => {
        if (res.data.code == 200) {
          this.$router.push("/index");
        } else  {
          this.$toast(res.data.msg);
          this.editCaptcha();
        }
      });
    },
    reg() {
      this.$router.push("/register");
    }
  },
  mounted(){
    this.editCaptcha();
  }
};
</script>
<style>
.head {
  text-align: center;
}
.logo {
  
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 40px;
}
.reg {
  float: right;
}
.user_name{
 border-bottom:1px solid #ccc;
}
.login{
  font-size: 24px;
}
</style>
