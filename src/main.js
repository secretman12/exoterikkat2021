import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';
import store from './store';
import * as VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VeeValidate);
new Vue({
  router,
  store,   // edo einai i main tou sistimatos  
  render: h => h(App)
}).$mount('#app') 
      
