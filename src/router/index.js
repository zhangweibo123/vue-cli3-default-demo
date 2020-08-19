import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/views/login.vue';

function importAll(r) {
  let arr = [];
  r.keys().forEach(file => {
    let fileName = file.substr(2).split('.vue')[0];
    if (fileName != 'login') {
      let firstLetter = fileName.charAt(0);
      let lowerCase = fileName.replace(firstLetter, firstLetter.toLowerCase());
      arr.push({
        path: `/${lowerCase}`,
        name: lowerCase,
        // component: () => import(`@/views/${fileName}.vue`)
        component: resolve => require([`@/views/${fileName}.vue`], resolve)
      });
    }
  });
  return arr;
}

Vue.use(VueRouter);

const router = new VueRouter({
  routes: importAll(require.context('../views', true, /\.vue/)).concat([
    { path: '/', name: 'login', component: login }
  ])
});

export default router;
