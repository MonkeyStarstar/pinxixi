<template>
<div class="page-wrap">
  <div>
    <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
         <first>
         </first>
        </mt-tab-container-item>
        <mt-tab-container-item id="contact">
         <product>
         </product>
        </mt-tab-container-item>
        <mt-tab-container-item id="chat">
         <messagelist>
         </messagelist>
        </mt-tab-container-item>
        <mt-tab-container-item id="me">
         <personal>
         </personal>
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
  <div>
    <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('../../public/img/first_selected.png')"
          :normalImage="require('../../public/img/first_normal.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
         首页   
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
         <tabbaricon
         :normalImage="require('../../public/img/tuijie_normal.png')"
         :selectedImage="require('../../public/img/tuijie_selected.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
         推荐
        </mt-tab-item>
        <mt-tab-item id="chat" @click.native="changeState(2)">
          <tabbaricon
          :normalImage="require('../../public/img/message_normal.png')"
          :selectedImage="require('../../public/img/message_selected.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          聊天
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
           :normalImage="require('../../public/img/my_normal.png')"
           :selectedImage="require('../../public/img/my_selected.png')"
           :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</div>
</template>
<script>
  import First from "./First.vue"
  import personal from "./personal.vue"
  import Product from "./Product.vue"
  import TabBarIcon from "./TabBarIcon.vue"
  import MessageList from "./Messagelist.vue"
  export default {
    data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods: {
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
      }
    }
  },
  components:{
    "first":First,
    "personal":personal,
    "product":Product,
    "tabbaricon":TabBarIcon,
    "messagelist":MessageList
  }
};
</script>
<style scoped>
  .mint-tabbar>.mint-tab-item{
  color:#707070;
  }
  .mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#d81e06;
  }
</style>