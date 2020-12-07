<template>
  <div class="user_column">
    <div class="user_column_item" v-for="(item,index) in filtterModule" :key="index" @click="toPaper(item)">
      <div class="chage_box" v-if="item.charge_num">
        <img src="../../../assets/images/paper/charge.png" />
      </div>
      <img class="user_column_item_image" :src="item.icon" />
      <div class="user_column_item_text">{{item.mName}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name:'module'
})
export default class Modules extends Vue {
  @Prop() private moduleList!: Array<any>;
  public active = 0;
  get filtterModule(){
      return this.moduleList;
  }
  toPaper(item:any){
    console.log(item)
    this.$router.push({
      name:'Paper'
    })
  }
  beforeCreate() {
    console.log(5555)
  }
  created() {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user_column {
  /* border: 1px solid black; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* align-content: flex-start; */
  /* flex-wrap: wrap; */
  background: #fff;
  overflow: auto;
  _height: 1%;
  padding: 0 32px 40px 32px;
  /* padding-bottom: 40px; */
}

.user_column_item {
  width: 25%;
  height: 160px;
  float: left;
  background: #fff;
  text-align: center;
  position: relative;
}

.chage_box {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 22px;
  right: 26px;
}

.chage_box image {
  width: 100%;
  height: 100%;
}

.user_column_item_badge {
  height: 28px;
  width: 28px;
  position: absolute;
  background: #b4282d;
  color: #fff;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 40px;
}

.user_column_item_image {
  width: 60px;
  height: 60px;
  margin-top: 40px;
}

.user_column_item_text {
  /* border: 1px solid black; */
  font-size: 14px;
  height: 40px;
  font-family: PingFang SC;
  color: #666666;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px auto 0;
}
</style>
