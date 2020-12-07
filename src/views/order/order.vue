<template>
  <div class='hello'>
    <van-nav-bar
      title="订单"
      left-text="返回"
      right-text="搜索"
      left-arrow
      fixed
      border
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <cprogress :cw="80" :id="index" :stroke-width='8' stroke-color="#F62256" bg="#FFDDDD"
                            :percent="100"></cprogress>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import cprogress from "@/components/process.vue"
@Component({
  name:"order",
  components:{
    cprogress
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public active = 0;
  public checked= true
  onClickLeft(){
    window.history.back()
  }
  onClickRight(){}
  onSubmit(){}
  onClickEditAddress(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mydiv {
}
</style>
