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
<<<<<<< HEAD

=======
import View_vaccine from '@/components/Vaccination_components/View_vaccine'
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93

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
<<<<<<< HEAD
=======
    //vaccination routes
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
    {
      path: '/vaccinations',
      name: 'Vaccinations',
      component: Vaccinations
<<<<<<< HEAD
    }
  ],
  mode:'history',
  hashbang:false
=======
    },
    {
      path: '/vaccine',
      name: 'view_vaccine',
      component: View_vaccine
    }
  ],
  // mode:'history',
   hashbang:false
>>>>>>> ae59f1c8d7e9e29a17a8e5ece6c6680e4d38de93
  
})
