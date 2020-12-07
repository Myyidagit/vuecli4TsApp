<template>
  <div class="nav_box">
    <div class="navList" v-for="(item,index) in navData" :key="index" @click="navClick(item,index)">
      <div class="nav_list_img">
        <img :src="item.imgUrl" class="navimages" />
      </div>
      <div class="nav_list_text">{{item.text}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "mynav"
})

export default class Myswiper extends Vue {
  // @Prop() private navData!: Array<any>;
  public navData = [
    {
      text: "内容",
      path:'Contentmore',
      imgUrl: require("@/assets/images/homepage/content.png")
    },
    {
      text: "活动",
      path:'Active',
      imgUrl: require("@/assets/images/homepage/active.png")
    },
    {
      text: "题库",
      path:'QuesHome',
      imgUrl: require("@/assets/images/homepage/quesb.png")
    }
  ];
  navClick(item:{[key:string]:string},index:number){
    console.log(item,index)
    switch (index){
      case 0:
        break;
      case 1:
        break;
      case 2:
        this.$router.push({name:item.path})
        break;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav_box {
  display: flex;
  justify-content: space-around;
  padding: 14px;
  background:#fff;
  border-top: 1px solid #fff;
  padding-top: 40px;
  .navList {
    /* display: inline-block; */
    width: 96px;
    text-align: center;
    /* width: 33.3%;
  text-align: center; */

    /* margin-left:132px; */
  }
  .navList:first-child {
    margin-left: 0px;
  }
  .nav_list_img .navimages {
    width: 64px;
    height: 64px;
  }
  .nav_list_text {
    margin-top: 10px;
    text-align: center;
  }
}
</style>
