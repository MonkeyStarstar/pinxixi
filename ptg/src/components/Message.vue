<template>
  <div class="rootstyle">
    <!--左侧文字图片-->
    <div class="leftimgtxt">
      <img :src=imgurl class="imgstyle">
      <div class="righttxt">
        <span class="title">{{title}}</span>
        <span class="subtitle">{{subtitle}}</span>
      </div>
    </div>
    <!--右侧发表时间-->
    <span class="sendtime">{{sendtime}}</span>
  </div>
</template>
<script>
  export default{
    props:{
      imgurl:{default:""},
      title:{default:""},
      subtitle:{default:""},
      sendtime:{default:""}
    }
  }
</script>
<style scoped>
  /*1.最外层父元素弹性布局*/
  .rootstyle{
    display:flex;/*弹性布局*/ 
    justify-content:space-between;/*子元素两端对齐 垂直居中 */
    align-items:center;
  }
  /*2.指定左侧图片*/
  .imgstyle{
    width:50px;
    height:50px;
  }
  /*3.指定左侧文字和图片*/
  .leftimgtxt{
    display:flex;
  }
  /*4.指定左侧标题*/
  .righttxt{
    display:flex;
    /*当前元素弹性布局 子元素按列排放 */
    flex-direction:column;
    justify-content:center;/*标题居中 */
    margin-left:7px;/*和左侧图片的间距 */
  }
  .title{
    font-size:17px;
    color:#000;
  }
  .subtitle{
    color:gray;
  }
  /*5.指定右侧文字*/
  .sendtime{
    color:gray;
  } 
</style>