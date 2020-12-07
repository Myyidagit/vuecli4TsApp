<template>
    <van-swipe :autoplay="3000" height="220">
        <van-swipe-item v-for="(image, index) in swiperArr" :key="index">
            <img class="swiper_img" :src="image" />
        </van-swipe-item>
    </van-swipe>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name:'swiper'
})
export default class Myswiper extends Vue {
  @Prop() private swiperArr!: Array<any>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .swiper_img{
      width: 100%;
      height: 100%;
  }
</style>
