<template>
  <div>
    <h3>聊天</h3>
    <message class="itemstyle" 
      v-for="(item,i) of list.data" :key="i" 
      :title="item.title" 
      :subtitle="item.subtitle" 
      :sendtime="item.time" 
      :imgurl="item.img"></message>
  </div>
</template>
<script>
  //引入子组件
  import Message from "./Message.vue"
  import messagelist from "../json/messagelist.json"
  export default{
    data(){
      return{
        list:messagelist //保存读取json文件  
      }
    },
    //注册子组件
    components:{
      "message":Message
    }
  }
</script>
<style scoped>
  .itemstyle{
    padding:5px;
    border-bottom:1px solid #d9d9d9;
  }
  h3{
    color:#d81e06;
  }
</style>