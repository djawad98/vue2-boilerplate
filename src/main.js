import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    var1: 1
  },

  mutations: {
    increment(state){
      state.var1 = 2;
    }
  }
});



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
