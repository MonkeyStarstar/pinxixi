<template>
  <div class="search-contaniner">
    <div class="search-content">
      <div class="one">
        <span class="search-ico"></span>
        <input type="search" placeholder="酸辣粉粗粉" style="outline:none;" v-model="kws" @keyup.13="search"/>
      </div>
      <span @click="goto_frist">取消</span>
    </div>
    <div class="_3eKneJlb">
      <div class="sear_methods">
        <img src="../assets/20.png"/>
        <span>更多搜索方式</span>
      </div>
      <div class="sear_sop">
        <img src="../assets/21.png"/>
         <span>搜索店铺</span>
      </div>
    </div>
   <div class="_3eKneJlb">
      <div class="sear_methods">
        <img src="../assets/20.png"/>
        <span>搜索发现</span>
      </div>
      <div class="sear_sop">
         <span class="find_1">芒果干批发</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        kws:"",
        canSearch:true
      }
    },
    methods:{
       //搜索功能
      search(){
      if(this.canSearch==true){
        this.canSearch=false;
        setTimeout(()=>{
          if(this.kws.trim()!==""){
            console.log(`搜索 ${this.kws} 相关的信息...`)
            this.$router.push({path:"searchProduct",query:{kws:this.kws }})
          }
          this.canSearch=true
        },2000)
      }
    },
      goto_frist(){
        this.$router.push("/")
      }
    },
    watch:{
    //监听数据
    kws(){
      this.search();
    }
  }
  };
</script> 
<style scoped>
*{margin:0;padding:0;
    box-sizing:border-box;}
  .search-contaniner{
    box-sizing:border-box;
    width:100%;
    font-size:.54rem;
    color:#58595b;
  }
  .search-contaniner>.search-content{
    height:50px;
    background-color:#e02e24;
    position:relative;
    display:flex;
  }
  .search-content>.one{
    height:36px; width:85%;
    border-radius:10px;
    background-color: rgb(237, 237, 237);
    position:relative;
    top:12%;
    left:1.5%;
    line-height:36px;
  }
  .search-content>.one>.search-ico:before{
    content: "\E604";
    font-size:1.1rem;
    font-family: "mintui" !important;
    position:absolute;
    left:4%;
  }
  .search-content>.one>input{
    width:80%;
    display:inline-block;
    height:100%;
    color: rgb(21, 21, 22);
    background-color: rgb(237, 237, 237);
    border:0;
    position:absolute;
    left:10%;
    font-size:1rem;
    
  }
  .search-content>span{
    display:inline-block;
    font-size:1rem;
    color:#fff;
    position:absolute;
    top:24%;
    right:1.5%;
  }
  ._3eKneJlb{
    width:100%; height:100px;
    padding: 1.16rem .06rem 0 1.14rem;
  }
  ._3eKneJlb>.sear_methods>img{
    height:16px;
     display: inline-block;
     position:relative;
     top:5px;
  }
  ._3eKneJlb>.sear_methods>span{
    display: inline-block;
    height: 21px;
    line-height: 21px;
    font-size: 15px;
    color: #9c9c9c;
    margin-left:10px;
  }
  ._3eKneJlb>.sear_sop{
    display: inline-block;
    min-width: 51px;
    max-width: 150px;
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    margin: 10px 8px 8px 0;
    border-radius: 16px;
    background-color: #f4f4f4;
    color: #58595b;
    text-align: center;
    vertical-align: top;
    font-size: 14px;
    cursor: pointer;
    position:relative
  }
  ._3eKneJlb>.sear_sop>img{
    display: inline-block;
    height:20px;
    position:absolute;
    top:7px;
    left:5%;
  }
  ._3eKneJlb>.sear_sop>span{
    color: #58595b;
    font-size:14px;
    padding-left:15px;
  }
  ._3eKneJlb>.sear_sop>span.find_1{
    padding-left:0;
    text-align:center;
  }
</style>