<template>
  <div class="content_box" style="background:#fff;">
    <div class="neiPadding">
      <div class="lm_content clearfix" v-for="(item,index) in content_list " :key="index">
        <div class="lm_cover">
          <img :src="item.cover" />
          <div v-if="item.type == 0 || item.type == 7" class="lm_desc_type">图文</div>
          <div v-if="item.type == 1 || item.type == 8" class="lm_desc_type">音频</div>
          <div v-if="item.type == 2 || item.type == 9" class="lm_desc_type">视频</div>
          <div v-if="item.type == 10" class="lm_desc_type">专栏</div>
        </div>
        <div class="lm_desc">
          <div class="lm_desc_detail">{{ item.title }}</div>
          <div class="lm_desc_time">
            <img class="lm_desc_img" src="@/assets/images/homepage/home_time.png" />
            <span class="lm_desc_time_text">{{ item.publish_time }}</span>
          </div>
          <div v-if="item.free == 1" class="lm_desc_price">
            {{ item.price }}
            <span>元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "contentList"
})
export default class ContentList extends Vue {
  @Prop() private content_list!: Array<any>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content_box {
  border-top: 1px solid #fff;
  /* 栏目 */
  .lm_inbox {
    padding: 0 0 0 0;
    background: #fff;
  }
  .lm_inbox_top {
    margin-top: 20px;
  }
  .lm_feLing {
    height: 20px;
    background: #f2f2f2;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .neiPadding {
    padding: 0 32px;
  }
  .lm_title {
    height: 60px;
    /* line-height: 60px; */
  }
  .lm_money {
    float: left;
    font-size: 24px;
    color: #ffffff;
    vertical-align: bottom;
    width: 128px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 18px;
    background: #ff575d;
    margin-top: 12px;
    margin-left: 20px;
  }
  .no_lm {
    text-align: center;
  }
  .no_lm img {
    width: 418px;
    height: 384px;
  }
  .no_lm_p {
    color: #919499;
  }
  .lm_more {
    float: right;
    width: 88px;
    height: 44px;
    margin-top: 8px;
    margin-right: 14px;
    text-align: right;
  }
  .lm_more img {
    width: 44px;
    height: 100%;
  }
  .lm_name {
    float: left;
    font-size: 36px;
    color: #333333;
    font-weight: 600;
  }
  .lm_content {
    margin-top: 24px;
    /* height: 208px; */
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  .lm_cover {
    float: left;
    position: relative;
  }
  .lm_cover .lm_desc_type {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 92px;
    height: 40px;
    background: rgba(51, 51, 51, 1);
    opacity: 0.8;
    border-radius: 4px;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
  }
  .lm_cover img {
    width: 268px;
    height: 200px;
    border-radius: 8px;
  }
  .lm_desc {
    float: left;
    overflow: hidden;
    width: 364px;
    margin-left: 40px;
  }
  .lm_desc_detail {
    color: #666666;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /*显示几行*/
    overflow: hidden;
    line-height: 40px;
  }
  .lm_desc_time {
    font-size: 24px;
    position: absolute;
    bottom: 8px;
    left: 308px;
  }
  .lm_desc_img {
    width: 24px;
    height: 24px;
    vertical-align: middle;

    margin-right: 10px;
  }

  .lm_desc_time_text {
    color: #a3a3a3;
    vertical-align: middle;
    font-size: 12px;
  }
  .lm_desc_price {
    color: #fd523f;
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .lm_desc_price_free {
    color: #0abea0;
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .lm_desc_price span {
    font-size: 12px;
    color: #fd523f;
  }
  .lm_p_box {
    /* padding: 12px 0; */
    border-bottom: 1px solid #eeeeee;
    width: 672px;
    height: 108px;
    line-height: 108px;
    margin: 0 auto;
    /* margin-top: 24px; */
  }
  .lm_p_detail {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666666;
  }
  .lm_p_detail_img {
    width: 36px;
    height: 36px;
    margin-right: 20px;
    vertical-align: middle;
  }
  .more_boxb {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
