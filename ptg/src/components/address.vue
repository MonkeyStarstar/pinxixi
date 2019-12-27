<template>
  <div class="address-body">
    <div class="address">
      <div class="add-adre">
        <span class="_1">添加收货地址</span>
        <span class="_2" @click="goto_Order">x</span>
      </div>
      <div class="add-info">
        <input class="m-addr-name" placeholder="收货姓名" type="text" style="outline:none;" v-model="name"/>
        <input class="m-addr-phone" placeholder="手机号码" type="text" style="outline:none;" v-model="phone" maxlength="11"/>
      </div>
      <section class="container" >
       <select v-model="provinceValue" @change="selectProvimce">
         <option
            v-for="(item,index) of provincearr"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></option>
        </select>
        <select v-model="cityValue"  @change="selectcity">
          <option v-for="(item,index) of cityarr" :key="index" :label="item.name" :value="item.id"></option>
        </select>
        <select v-model="RegionValue">
          <option
            v-for="(item,index) of regionarr"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></option>
        </select>
      </section>
      <div class="deta-info">
        <input class="m-deta-info" placeholder="详细地址（如街道、小区、乡镇、村）" type="text" style="outline:none;" v-model="plaseinput"/>
      </div>
      <div class="preserve" @click="preserve">
      保存
      </div>
    </div>
  </div>
  </div>
</template>
<script>
// import { province } from '../assets/js/map.js'
 export default {
  created () {
    
    this.axios.get('address/map').then(res => {
        if (res.data.code == 200) {
          this.provincearr = res.data.data;
          this.provincearr.unshift({name:'—请选择省份—',id:'100000',children:[{name:'—请选择市—',id:'100001',children:[{name:'—请选择区县—',id:'100002',children:[]}]}]});
        } else {
          this.$toast("获取地址数据失败");
        }
      });
      
    //this.provincearr.unshift({name:'—请选择省份—',id:'100000',children:[{name:'—请选择市—',id:'100001',children:[{name:'—请选择区县—',id:'100002',children:[]}]}]});
    //console.log(this.provincearr);
  },
  data () {
    return {

      name:"",
      phone:"",
      plaseinput:"",
      arr: [1, 3, 4],
      province: [],
      provincearr:[],
      cityarr: [{name:'—请选择市—',id:'100001',children:[{name:'—请选择区县—',id:'100002',children:[]}]}],
      regionarr: [{name:'—请选择区县—',id:'100002',children:[]}],
      provinceValue: '100000',
      cityValue:'100001',
      RegionValue: '100002'
    }
  },
  mounted () {
  },
  methods: {
    //跳转到Order页面
    goto_Order(){
      this.$router.push({path:"/Order",query:{goods_id:this.$router.history.current.query.goods_id}})
    },
    preserve(){
      var name=this.name;
      var phone=this.phone;
      var plaseinput=this.plaseinput;
      console.log(this.RegionValue);
      var regphone=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if(name==""){
        this.$toast("请输入姓名");
        return;
      }else if(phone=="" || !regphone.test(phone)){
        this.$toast("请输入正确的手机号");
        return;
      }else if(this.provinceValue=="100000"){
        this.$toast("请选择省份");
        return;
      }else if(typeof(this.cityValue)=="undefined"){
        this.$toast("请选择城市");
        return;
      }else if(this.RegionValue=="100002"){
        this.$toast("请选择区/县");
        return;
      }else if(plaseinput==""){
        this.$toast("请输入详细地址");
        return;
      }
      console.log('姓名：'+this.name+'手机号'+this.phone+'省'+this.provinceValue+'市'+this.cityValue+'区'+this.RegionValue+'详细地址'+this.plaseinput);
      var data = 'name='+this.name+'&phone='+this.phone+'&province_id='+this.provinceValue+'&city_id='+this.cityValue+'&region_id='+this.RegionValue+'&detail='+this.plaseinput;
      this.axios.post('address/add', data).then(res => {
        if (res.data.code == 200) {
          this.$toast(res.data.msg);
          this.$router.push({path:"/Order",query:{goods_id:this.$router.history.current.query.goods_id}});
        } else  {
          this.$toast(res.data.msg);
        }
      });
    },
    selectProvimce () {
      this.cityarr = [];
      this.regionarr = [];
      this.cityValue = '';
      this.RegionValue = '';
      //console.log(this.provinceValue)
      for (let item of this.provincearr) {
        //console.log(item.id)
        if (this.provinceValue == item.id) {
          this.cityarr = item.children
        }
      }
    },
    selectcity () {
      this.regionarr = [];
      this.RegionValue = '';
      for (let item of this.cityarr) {
        if (this.cityValue== item.id) {
          this.regionarr = item.children
        }
      }
    }
  },
}
</script>
 <style>
  .address-body{
   height:667px;
   position:relative;
  }
  .address {
  background:#fff;
  width: 90%;
  height:279px;
  overflow: hidden;
  border:1px solid #ccc;
  border-radius:5px;
  position:absolute;
  top:50%;
  margin-top:-140px;
  left:5%;
  }
.address>.add-adre{
  height:51px;
  padding:0 13px;
  line-height: 51px;
  text-align:center;
  font-size:17PX;
  position:relative;
}
.address>.add-adre>._2{
  font-size:23px;
  color:#ccc;
  position:absolute;
  right:13px;
}
.address>.add-info{
  position: relative;
  width: 100%;height:45px;
  text-align: left;
  display:flex;
  border-bottom:1px solid #ededed;
  border-top:1px solid #ededed;
  margin:5px 0;
}
.add-info>input{
  border:0;
}
.add-info>.m-addr-name{
  width: 50%;
  text-align: left;
  border-right: 1px solid #ededed;
  border-radius: 0;
  margin:0 5px;
}
.add-info>.m-addr-phone{
  margin:0 5px;
}
.deta-info{
  width:100%;
  height:45px;
  line-height:54px;
  padding-left: 0;
  font-size:15px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
  padding:8px 0; 
}
.deta-info>input{
  width:100%;
  border:0;
  margin:0 5px;
}
.container{
  text-align:center;
}
select{
  width:31%;
  height:32px;
  color: #151516;
  margin:10px 1px;
}
.preserve{
  margin:0 auto;
  width:77%;height:45px;
  line-height:50px;
  text-align:center;
  background:#e02e24;;
  border-radius:5px;
  color:#fff;
  margin-top:6px;
  font-size:17px;
}
</style>