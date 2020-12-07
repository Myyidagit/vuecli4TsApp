<template>
  <div class="mine_contain">
    <div class="mine_header"></div>
    <div class="user_image">
      <van-image
        round
        width="6rem"
        height="6rem"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="user_name">Super·bear</div>
    </div>
    <div class="section">
      <div class="row">
        <img class="left-icon" src="../../assets/images/mine/order.png" />
        <div class="sub">
          <div class="name">我的订单</div>
          <img class="right-icon" src="../../assets/images/mine/right.png" />
        </div>
      </div>
      <div class="row" @click="toCompont">
        <img class="left-icon" src="../../assets/images/mine/order.png" />
        <div class="sub">
          <div class="name">我的组件</div>
          <img class="right-icon" src="../../assets/images/mine/right.png" />
        </div>
      </div>
      <div class="row">
        <img class="left-icon" src="../../assets/images/mine/account.png" />
        <div class="sub">
          <div class="name">我的账户</div>
          <img class="right-icon" src="../../assets/images/mine/right.png" />
        </div>
      </div>
      <div class="row">
        <img class="left-icon" src="../../assets/images/mine/about.png" />
        <div class="sub">
          <div class="name">关于我们</div>
          <img class="right-icon" src="../../assets/images/mine/right.png" />
        </div>
      </div>
    </div>
    <div class="login_btn">
      <van-button
        type="primary"
        color="#fff"
        style="width:80%;margin: 0 auto;"
        icon="chat"
        block
        round
        @click="showdia"
      >微信登录</van-button>
    </div>
    <div class="login_btn">
      <van-button
        type="primary"
        color="#fff"
        style="width:80%;margin: 0 auto;"
        icon="graphic"
        block
        round
        @click="showpopup"
      >手机号登陆</van-button>
    </div>

    <van-action-sheet v-model="show" title="标题">
      <div class="content">内容</div>
    </van-action-sheet>
    <van-popup v-model="popup" position="left" style="{ width: '30%' }" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "mine"
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public active = 0;
  public show = false;
  public popup = false;
  public loading = true;
  showdia() {
    this.show = true;
  }
  showpopup() {
    this.popup = true;
  }
  //跳到我的组件
  toCompont() {
    this.$router.push({
      name: "SelfPage"
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mine_contain {
  .mine_header {
    height: 140px;
    // background: #000000;
    background: linear-gradient(to bottom, #000000 12%, #f2f6fc);
  }
  .user_image {
    text-align: center;
    margin-top: -90px;
    .user_name {
      height: 80px;
      line-height: 80px;
    }
  }

  .section {
    margin-bottom: 20px;
    background: #fff;
  }
  .row {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 0 0 32px;
    box-sizing: border-box;
    background: linear-gradient(to right bottom, #ffffff, #f2f6fc);
  }
  .left-icon {
    width: 50px;
    height: 50px;
    margin-right: 50px;
  }
  .row .sub {
    flex: 1;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
  }
  .row + .row .sub {
    border-top: 2px solid #f2f2f2;
  }
  .name {
    color: #333;
    font-size: 14px;
  }
  .sub-right {
    display: flex;
    align-items: center;
  }
  .right-info {
    margin-right: 20px;
    color: #999;
    font-size: 28px;
  }
  .right-icon {
    width: 44px;
    height: 44px;
    margin-right: 32px;
  }
  .message-box {
    width: 20px;
    height: 20px;
    margin: 10px 10px 0 0;
    background: red;
    border-radius: 50%;
  }
  .login_btn {
    margin-top: 30px;
    .van-button__content {
      color: #000;
    }
  }
  .content {
    padding: 16px;
    height: 400px;
  }
  .van-popup--left {
    height: 100%;
    width: 30%;
  }
}
</style>
