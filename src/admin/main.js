import Vue from 'vue';
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import  requests from './requests'
import about from './components/about'
import reviews from './components/reviews'
import work from './components/work'
import login from './components/login'
store.$axios = requests

  Vue.use(Router);

  const routes = [
    { path: '/about', component: about },
    { path: '/work', component: work },
    { path: '/reviews', component: reviews },
    { path: '/login', component: login }
  ]

  const router = new Router({
    routes 
  });
  

new Vue({
  el: "#app-root",
  render: h => h(App),
  router: router,
  store
});

if (router.currentRoute.path == '/') {
  router.push('/about');
}