import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

Vue.use(VueRouter);

const routes =[
  {path: '/home', component: Home},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/', component: Login}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
