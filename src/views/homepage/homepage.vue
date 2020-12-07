<template>
  <div id="homepage">
    <van-sticky>
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    </van-sticky>
    <myswiper :swiperArr="images"></myswiper>
    <!-- <vantab></vantab> -->
    <my-nav></my-nav>
    <content-list v-show="loading" :content_list="contentData"></content-list>
    <div style="text-align: center;" v-show="!loading">
      <van-loading color="#000000" />
    </div>
    <!-- <van-button type="primary" @click="showDialog">主要按钮</van-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CacheViews from "@/store/modules/cacheView"; //导入vuex中的缓存模块
import { getContentList } from "@/api/homepage/homepage";
import myswiper from "./coms/swiper.vue";
import myNav from "./coms/nav.vue";
import contentList from "./coms/contentList.vue";
import vantab from "@/components/vantabs.vue";
@Component({
  name: "homePage",
  components: {
    myswiper,
    myNav,
    contentList,
    vantab
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public active = 0;
  public value = "";
  public loading = false;
  public images = [
    "https://graphic-module.oss-cn-beijing.aliyuncs.com/168addConent/2020-7-6-17%3A14%3A4%3A/9%E6%96%87%E7%AB%A0%E5%9B%9B.jpg",
    "https://graphic-module.oss-cn-beijing.aliyuncs.com/168addConent/2020-7-6-17%3A11%3A5%3A/6%E6%96%87%E7%AB%A0%E4%B8%89.jpg",
    "https://graphic-module.oss-cn-beijing.aliyuncs.com/168addConent/2020-7-6-17%3A7%3A40%3A/5%E6%96%87%E7%AB%A0%E4%BA%8C.jpg"
  ];
  public subArr = [];
  public contentData = [];

  showDialog() {
    this.$dialog.alert({
      title: "提示",
      showConfirmButton: true,
      showCancelButton: true,
      message: "弹窗内容"
    });
  }
  async getList() {
    const params = {};
    const { data } = await getContentList(params);
    setTimeout(() => {
      this.loading = true;
      if (data.status == 0) {
        let arr: Array<any> = [];
        data.data.map((item: any, index: number) => {
          arr.push(item.content_list);
        });
        let arr2 = [].concat.apply([], arr);
        this.contentData = arr2;
      }
    }, 2000);
  }
  mounted() {
    //读取vuex中的数据
    CacheViews.setStatus();
    CacheViews.ADD_CACHEVIEWS("mine");
    console.log(CacheViews.getCacheview);
  }
  created() {
    this.getList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#homepage /deep/ {
  .van-search {
    background: linear-gradient(to right bottom, #000000 20%, #f2f6fc);
  }
  .van-swipe {
    background: #000;
  }
  .swiper_img {
    width: 100%;
    height: 100%;
  }

  .van-tabs__line {
    // background-color: #000000;
  }
}
</style>
