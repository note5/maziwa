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
       isLoggedIn: null,
       cows: [
        {
            value: false,
            name: "chelel",
            weight: 408,
            breed: "freshian",
            picture:
              "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg",
            date: "1/1/2009",
            delete: "Delete"
          },
          {
            value: false,
            name: "baringo",
            weight: 345,
            breed: "ashyre",
            picture: "http/hshshhs/hdhdd",
            date: "1/1/2009",
  
            delete: "Delete"
          },
          {
            value: false,
            name: "mardadi",
            weight: 287,
            breed: "jersey",
            picture:
              "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg",
            state: ["pregnant", "dry"],
            date: "1/1/2009",
  
            delete: "Delete"
          }
       ]
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