import Vue from 'vue'
import Router from 'vue-router'

//routes to components
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import view_cow from '@/components/view_cow'
//


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
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
      component: Dashboard
    },
    {
      path: '/view_cow',
      name: 'view_cow',
      component: view_cow
    }
  ],
  mode:'history',
  shabang:false
})
