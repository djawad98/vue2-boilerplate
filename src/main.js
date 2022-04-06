import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false


import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: require("./components/HelloWorld.vue").default,
    name: "home",
  },
];

const router = new VueRouter({
  routes,
  // linkExactActiveClass: "",
  // linkActiveClass: "",
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
