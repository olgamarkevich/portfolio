import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

import about from './components/about';
import reviews from './components/reviews';
import work from './components/work';

// const about = { template: about }
// const work = { template: work }
// const reviews = { template: reviews }

Vue.use(Router);

const routes = [
  { path: '/about', component: about },
  { path: '/work', component: work },
  { path: '/reviews', component: reviews },
];

const router = new Router({
  routes,
});

new Vue({
  el: '#app-root',
  render: (h) => h(App),
  router: router,
});

if (router.currentRoute.path == '/') {
  router.push('/about');
}
