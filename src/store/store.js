import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    key: 'bart',
    storage: window.localStorage
})

export default new Vuex.Store({
    
   state:{
       token: null, //can not modify a mutation
       user:null,
       isLoggedIn: null
   },
   mutations:{
       setToken(state, token){
           state.token = token
           if(token){
               state.isLoggedIn=true
    
           }else{
               state.isLoggedIn=false
           }
       },
       setUser(state, user){
           state.user = user
       }
   },
   actions:{
       setToken ({commit}, token){
           commit('setToken',token)
       },
       setUser ({commit}, user){
           commit('setUser',user)
       }
   },
   plugins: [vuexLocal.plugin]

})