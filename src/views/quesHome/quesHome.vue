<template>
  <div class="paper">
    <!-- <van-nav-bar
      title="题库"
      left-text="返回"
      left-arrow
      fixed
      border
      @click-left="onClickLeft"
    />-->
    <div class="paper_header">
      <div class="classfy_box" @click="show_classPicker">
        {{ classFy }}
        <img src="../../assets/images/paper/change.png" alt />
      </div>
      <div class="home_box" @click="backHome">首页</div>
    </div>
    <div class="header_bai"></div>
    <!-- 二级分类 -->
    <vantab type="line" @change="tabChange" :subArr="subArr"></vantab>
    <!-- 模块 -->
    <my-module :moduleList="moduleList"></my-module>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
        value-key="name"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import vantab from "@/components/vantabs.vue";
import { getClassfyList,getsubjectList,getModuleList } from "@/api/paper/paper";
import { Paperpara,Subparams,Moduparams } from "@/interfaces/paperface/paperface";
import CacheViews from '@/store/modules/cacheView' //导入vuex中的缓存模块
import myModule from "./com/modules.vue"
@Component({
  name:'quesHome',
  components: {
    vantab,myModule
  }
})
export default class Paper extends Vue {
  @Prop() private msg!: string;
  public active = 0;
  public subArr = [];//二级分类
  public classFy = "初级会计";
  public showPicker = false;
  public columns = [{children:[{subject_id:0}]}];  //三级科目
  public moduleList = [];//模块列表
  onClickLeft() {
    window.history.back();
  }
  /**
   * @description 切换分类
   */
  tabChange(sid:number){
    this.getModuleList(sid)
  }
  /**
   * @description 获取分类
   */
  getClassList() {
    let params = {
    };
    getClassfyList(params).then(res => {
      console.log(res);
      let result = res.data;
      if(result.status == 0){
        result.subjects.map((item:any,index:number) =>{
          item.children = item.child_class;
        })
        //默认给第一个
        this.classFy = result.subjects[0].child_class[0].name;
        this.getSubList(result.subjects[0].child_class[0].subject_id);
        this.columns = result.subjects;
      }
    });
  }
  /**
   * @description 获取模块列表
   */
  getModuleList(sid:number){
      let params:Moduparams = {
        sid:sid
      }
      getModuleList(params).then(res =>{
        console.log(res)
        const retule = res.data;
        if(retule.status == 0){
          this.moduleList = retule.dataList;
        }
      })
  }
  /**
   * @description 获取三级科目
   */
  getSubList(subject_id:number){
    let params:Subparams = {
      subject_id:subject_id
    }
    getsubjectList(params).then(res=>{
      const result = res.data;
      if(result.status == 0){
        this.subArr = result.subjects;
      }else{
        this.$toast({
          message: result.message,
          position: 'top',
        });
      }
    })
  }
  /**
   * @description 选取二级分类确定
   */
  onConfirm(val: any,index:any) {
    this.classFy = val[1]?val[1]:'请选择';
    this.showPicker = false;
    let subFa = this.columns[index[0]];
    let subject_id = subFa.children[index[1]].subject_id;
    this.getSubList(subject_id);
  }
  //显示分类选择
  show_classPicker(){
    this.showPicker = true
  }
  backHome(){
    window.history.back();
  }
  activated() {
    console.log(88888) 
  }
  deactivated() {
    console.log(66666) 
  }
  beforeRouteLeave (to:any, from:any, next:any) {
    // console.log(from)
    // console.log(to)
    // if(from.meta.father != to.meta.keepName){
    //   CacheViews.DEL_CACHEVIEWS(from.meta.father)
    // }
  }
  created() {
      this.getClassList();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.paper {
  background: #fff;
  .paper_header {
    height: 100px;
    width: 100%;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    // padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 88888;
    .classfy_box {
      color: #000;
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-left: 30px;
      
      // width: 400px;
      img {
        width: 38px;
        height: 38px;
        margin-left: 10px;
      }
    }
    .home_box {
      color: #000;
      font-weight: bold;
      width: 100px;
      text-align: right;
      background: url("../../assets/images/paper/home.png") no-repeat left
        center;
      background-size: 38px 38px;
      margin-right: 30px;
    }
  }
  .header_bai {
    height: 100px;
  }
}
</style>
