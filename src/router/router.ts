import Home from '../views/Home.vue'
import Homepage from '../views/homepage/homepage.vue'
import Main from '../views/main/main.vue'
import order from '../views/order/order.vue'
import Squire from '../views/squire/squire.vue'
import QuesHome from "../views/quesHome/quesHome.vue"
import Paper from "../views/paper/paper.vue"
import SelfPage from "../views/selfCompontent/selfPage/selfPage.vue"
import Svgcom from "../views/selfCompontent/svg/svgSuccess.vue"
import Progress from "../views/selfCompontent/process/process.vue"
const arr = [
        {
          path: '',
          component: Homepage,
          name: 'Homepage',
          redirect: 'homepage',
          meta: {
            title: '首页',
            leavel:1
          }
        },
        {
          path: '/homepage',
          name: 'Homepage',
          component:Homepage,
          meta: {
            keepName:'homePage',
            title: '题库'
          }
        },
        {
          path: '/squire',
          name: 'Squire',
          component:Squire,
          meta: {
            title: '大厅',
            keepName:'squire',
            leavel:1
          }
        },
        {
          path: '/car',
          name: 'Car',
          component:order,
          meta: {
            title: '订单',
            leavel:1
          }
        },
        {
          path: '/main',
          name: 'Main',
          component:Main,
          meta: {
            title: '个人中心',
            leavel:1
          }
        },
        {
          path: '/quesHome',
          name: 'QuesHome',
          component:QuesHome,
          meta: {
            level:1,
            father:'homePage',
            keepName:'paperCompontent',
            title: '题库'
          }
        },
        {
          path: '/paper',
          name: 'Paper',
          component:Paper,
          meta: {
            level:2,
            father:'quesHome',
            keepName:'paper',
            title: '题库'
          }
        },
        {
          path: '/selfPage',
          name: 'SelfPage',
          component:SelfPage,
          meta: {
            level:2,
            title: '我的组件'
          }
        },
        {
          path: '/svgcom',
          name: 'SvgPage',
          component:Svgcom,
          meta: {
            level:2,
            title: 'svg组件'
          }
        },
        {
          path: '/progress',
          name: 'Progress',
          component:Progress,
          meta: {
            level:2,
            title: '进度条'
          }
        },
        
]
export default arr
