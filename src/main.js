import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

import VueMaterial from 'vue-material'
import ListResaurants from './components/ListRestaurants.vue'
import RestaurantDetail from './components/RestaurantDetail.vue'
import Acceuil from './components/Acceuil.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      
      component: Acceuil,
      
    }, {
      path: "/ListRestaurants",
      
      component: ListResaurants,
      
    },{
      path: "/RestaurantDetail/:id",
      
      component: RestaurantDetail,
      
    }
  ],
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
