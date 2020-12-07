<template>
  <div class="paper">
      <div class="paper_header">
          <van-nav-bar
            title="试卷"
            left-text="返回"
            left-arrow
            fixed
            border
            @click-left="onClickLeft"
            />
      </div>
      <div class="paperList_box">
        <div v-for="item in 80">
          <p>555{{item}}</p>
        </div>
      </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name:'paper'
})
export default class Paper extends Vue {
  @Prop() private moduleList!: Array<any>;
  onClickLeft(){
      window.history.back();
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
.paper{
    display: flex;
    flex-direction: column;
    height: 100%;
    .paper_header{
        height: 92px;
    }
    .paperList_box{
        flex: 1;
        background: #fff;
        overflow: auto;
    }
}
</style>
