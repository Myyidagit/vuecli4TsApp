<template>
  <div class='hello'>
    <cprogress :cw="80" :id="8" :stroke-width='8' stroke-color="#F62256" bg="#FFDDDD" :percent="sliderValue"></cprogress>
    <van-slider v-model="sliderValue" @change="sliderChange" />
    <van-button type="primary" @click="add">增加</van-button>
    <van-button type="warning" @click="reduce">减少</van-button>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import cprogress from "@/components/process.vue"
@Component({
  name:"squire",
  components:{
    cprogress
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public active = 0;
  public sliderValue =0;
  sliderChange(val:number){
    this.filterNum(0,20,1000,1);
  }
  add(){
    this.filterNum(0,80,1000,0);
  }
  filterNum(startNum=0,endNum:number,time:number,flag:number){
    let diffNum = endNum - startNum;
    let timeNum = time/endNum;
    let timeOut = setInterval(()=>{
      if(this.sliderValue<endNum){
          this.sliderValue += 1;
      }else{
          clearInterval(timeOut);
      }
    },timeNum)
  }
  reduce(){
    this.sliderValue = 20;
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.van-goods-action{
    bottom: 100px;
}
</style>
