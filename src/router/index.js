import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

//general components

import Home from '@/components/General_components/Home'
import profile from '@/components/General_components/Profile'

//user_components

import Register from '@/components/User_components/Register'
import Login from '@/components/User_components/Login'
import Dashboard from '@/components/User_components/Dashboard'

//farmer_components
import Farmer from '@/components/Farmer_components/Farmer'

//cow_conponents
import Cows from '@/components/Cows_components/Cows'
import view_cow from '@/components/Cows_components/view_cow'

// vaccinations
import Vaccinations from '@/components/Vaccination_components/Vaccinations'
import View_vaccine from '@/components/Vaccination_components/View_vaccine'

//feeding records
import Feeding from '@/components/Feeding_components/Feeding'
import View_cow_feed from '@/components/Feeding_components/View_cow_feed'
//milk records
import Milk_records from '@/components/Milk_components/Milk_records'

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
    },
    //vaccination routes
    {
      path: '/vaccinations',
      name: 'Vaccinations',
      component: Vaccinations
    },
    {
      path: '/vaccine',
      name: 'view_vaccine',
      component: View_vaccine
    },
    //feeding records
    {
      path: '/feeding',
      name: 'Feeding',
      component: Feeding
    },
    {
      path: '/view_cow_feed',
      name: 'View_cow_feed',
      component: View_cow_feed
    },
    //milk records
    {
      path:'/milk_records',
      name:'Milk_records',
      component:Milk_records
    }


  ],
  // mode:'history',
   hashbang:false
  
})
