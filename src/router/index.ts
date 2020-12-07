import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import CacheViews from '@/store/modules/cacheView' //导入vuex中的缓存模块
import MenuNav from '@/store/modules/menuNav' //导入vuex中的缓存模块
import routeArr from './router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = routeArr;

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to:any, from:any, savedPosition:any) => {
    console.log('savedPosition',savedPosition)
    if (savedPosition) {
      
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  //如果大于一 则隐藏导航
  if(to.meta.level>1){
    MenuNav.CHANGE_showMenu(false);
  }else{
    MenuNav.CHANGE_showMenu(true);
  }
  next();
})

export default router
