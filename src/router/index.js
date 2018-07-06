import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

//general components

import Home from '@/components/Home'
import profile from '@/components/Profile'

//user_components

import Register from '@/components/User_components/Register'
import Login from '@/components/User_components/Login'
import Dashboard from '@/components/User_components/Dashboard'

//farmer_components
import Farmer from '@/components/Farmer_components/Farmer'

//cow_conponents
import Cows from '@/components/cows_components/Cows'
import view_cow from '@/components/cows_components/view_cow'

//


Vue.use(Router)
function requireAuth (to, from, next) {
  if ( store.state.token) {
         next();
    }else{
      next('register');
    }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    //users routes
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    // farmer routes
    {
      path: '/farmer',
      name: 'Farmer',
      component: Farmer,
      beforeEnter: requireAuth
    },
    // fa
    // cows routes
    {
      path: '/view_cow',
      name: 'view_cow',
      component: view_cow
    },
    {
      path: '/cows',
      name: 'cows',
      component: Cows
    }
  ],
  mode:'history',
  hashbang:false
  
})
