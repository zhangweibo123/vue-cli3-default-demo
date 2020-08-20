import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//重置css
import '@/assets/css/reset.css';
// ajax
import { ajax } from './xhr/axios.js';
Vue.prototype.$axios = ajax;
// 引入element
import ElementUI from 'element-ui';
//默认主题色
// import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element-#6B7BF5/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
