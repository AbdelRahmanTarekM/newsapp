import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import store from './Store/index';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';

Vue.use(VueRouter);

const routes =[
  {path: '/home', name: 'home',component: Home},
  {path: '/register', name: 'register',component: Register},
  {path: '/login', name: 'login',component: Login},
  {path: '/favorites',name: 'favorites', component: Favorites},
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
  store,
  render: h => h(App)
}).$mount('#app')
