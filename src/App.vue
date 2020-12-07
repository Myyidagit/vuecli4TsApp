<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar :route="true" v-show="isMenushow" @change='tabChange' v-model="active" inactive-color="#000000" :border="true" active-color="#ff5a5a">
      <van-tabbar-item v-for="(item,index) in navData" :name='item.path' :key="index" :to='item.path' :icon="item.icon">
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CacheViews from '@/store/modules/cacheView' //导入vuex中的缓存模块
import MenuNav from '@/store/modules/menuNav' //导入vuex中的缓存模块
@Component({
  components: {
    
  }
})
export default class Home extends Vue {
  public active = 'Homepage';
  public navData = [
    {
      name:'首页',
      path:'/homepage',
      icon:'wap-home'
    },
    {
      name:'课程',
      path:'/squire',
      icon:'bag'
    },
    {
      name:'题库',
      path:'/quesHome',
      icon:'cart'
    },
    {
      name:'我的',
      path:'/main',
      icon:'friends'
    }
  ];
  //获取缓存的页面
  get cachedViews(){
    return CacheViews.cachePages
  }
  //获取导航是否要隐藏
  get isMenushow(){
    return MenuNav.getShowMenu
  }
  tabChange(index:string){
  }
}
</script>
<style lang="scss">
#app{
  height: 100%;
}
</style>
