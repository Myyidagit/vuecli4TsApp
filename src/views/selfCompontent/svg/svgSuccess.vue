<template>
  <div class="svgbox">
    <div class="com_header">
      <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    </div>
    
    <div class="conList_body">
      <ky-switch></ky-switch>
        <!-- 成功的svg -->
      <div class="video-success">
        <svg class="checkmark" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
          <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
      <!-- 失败的svg -->
      <div>
        <svg class="error" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="circle" cx="26" cy="26" r="25" fill="none" />
          <path class="line" fill="none" d="M17.36,34.736l17.368-17.472" />
          <path class="line" fill="none" d="M34.78,34.684L17.309,17.316" />
        </svg>
      </div>
      <!-- 百分比svg -->
      <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svgCircle"
            width="40"
            height="40"
            fill="#000000"
        >
            <path xmlns="http://www.w3.org/2000/svg" id="svgCirclePath" :d="per()" fill="#409EFF" />
        </svg>
      </div>
    </div>
    <div id="extendBox"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import alertCom from "../extend/alertCom.js"
@Component({
  name: "svgcom"
})
export default class Svg extends Vue {
  onClickLeft() {
    window.history.back();
  }
  toDetail(obj: any) {
    this.$router.push({
      name: obj.path
    });
  }
  per(){
      let cx = 20;
      let cy = 20;
      let r = 20;
      let percent = 80;
      let per = (percent / 100) * 360; //角度
      let radian = per * (Math.PI / 180); //弧度
      var x2 = cx + r * Math.sin(radian);
      var y2 = cx - r * Math.cos(radian);
      let big = per > 180 ? 1 : 0;//是1画大的还是0画小的
      var d =
        "M " +
        cx +
        " " +
        cy +
        " L " +
        cx +
        " 0 A " +
        cx +
        " " +
        cy +
        " 0 " +
        big +
        " 1 " +
        x2 +
        " " +
        y2 +
        " " +
        "Z";
      return d;
    
  }
  mounted() {
     alertCom({
       text:'不能大于1',
       duration:2000,
       type:'success'
     })
     
     console.log(this)
  }
}
</script>
<style lang="scss" scoped>
@import "./css/success.css";
@import "./css/error.css";
.svgbox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  .com_header {
    height: 92px;
  }
  .conList_body {
    flex: 1;
    background: #fff;
  }
}
</style>