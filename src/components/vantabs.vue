<template>
  <div class="sub_menu">
    <van-tabs :type="type" :ellipsis="false" @click="clickTab">
      <van-tab
        v-for="(item,index) in subArr"
        title-active-color="#ee0a24"
        color="#000000"
        :key="index"
        :title="item.name"
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: "line" }) private type!: string;
  @Prop({
    default: () => {
      return [
        {
          name: "订单",
          id: 7
        },
        {
          name: "色温",
          id: 8
        }
      ];
    }
  })
  private subArr!: Array<any>;
  clickTab(name:any,title:any){
    let sub_id = this.subArr[name].subject_id;
    this.$emit('change',sub_id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sub_menu /deep/{
  padding: 0 8px;
  background: #fff;
  .van-tabs__nav--card{
      border: 1px solid #000;
  }
  .van-tabs__nav--card .van-tab.van-tab--active{
      background: #000;
      color: #fff;
  }
  .van-tabs__nav--card .van-tab{
      color: #000;
      border-right: 1px solid #000;
  }
}
</style>
