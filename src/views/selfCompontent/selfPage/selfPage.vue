<template>
  <div class="comList">
    <div class="com_header">
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            ></van-nav-bar>
    </div>
    <div class="conList_body">
        <div class="pageList_item" v-for="(item,index) in pageList" :key="index" @click="toDetail(item)">
            <div>{{ item.name }}</div>
            <div>
                <img src="../../../../src/assets/images/mine/right.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "comList"
})
export default class ComList extends Vue {
  public pageList:Array<any> = [
      {
          name:'svg',
          path:'SvgPage'
      },
      {
          name:'进度条',
          path:'Process'
      },
  ];
  onClickLeft() {
      window.history.back();
  }
  toDetail(obj:any){
      this.$router.push({
          name:obj.path
      })
  }
}
</script>
<style lang="scss" scoped>
.comList {
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
    .pageList_item{
        height: 80px;
        line-height: 80px;
        margin-top: 20px;
        background: #fff;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        img{
            width: 30px;
            height: 30px;
        }
    }
  }
}
</style>