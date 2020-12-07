import Vue, { DirectiveOptions } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import "@/assets/style/reset.css"
import * as directives from "./directives/directives"
Vue.config.productionTip = false;
Vue.use(Vant);

Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
});
// import { Button } from 'vant';
// Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
