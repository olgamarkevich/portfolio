import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
const header = document.querySelector('.header');

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 3000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,

  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

new Vue({
  el: '#header-scroll',
  methods: {},
});

new Vue({
  el: '#footer-scroll',
  methods: {},
});

new Vue({
  el: '#arrow-scroll',
  methods: {},
});
