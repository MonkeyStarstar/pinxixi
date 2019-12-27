import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//功能：引入mint-ui组件库
//1.将mint-ui组件库中的组件引入当前项目
import MintUI from 'mint-ui'
//2.单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
import md5 from 'js-md5';
//引入vue-lazyload懒加载
import VueLazyload from 'vue-lazyload'
//3.注册
Vue.use(MintUI);

//5.引入第三方ajax库axios
//6.引入axios
import axios from "axios"
//7.配置访问服务器的基础地址
axios.defaults.baseURL="http://pxx.weixihang.com/"
//8.配置发送请求保存session信息
axios.defaults.withCredentials=true;
//9.将axios注册vue
Vue.prototype.axios=axios;
Vue.prototype.$md5 = md5;
//注册懒加载
Vue.use(VueLazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
