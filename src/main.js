import Vue from 'vue'
import  Router  from  'vue-router'
import App from './App.vue'
import  Home  from  './components/Home.vue'
import  About  from  './components/About.vue'

Vue.use(Router)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

const  router  =  new  Router({
  routes: [{
    path:  '/',
    name:  'Home',
    component:  Home
  },{
    path:  '/about',
    name:  'About',
    component:  About
  }]
})

new Vue({
  router, render: h => h(App),
}).$mount('#app')
