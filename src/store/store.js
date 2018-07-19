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
    cow: null,
    headers: [
      {
        text: "Name of cow",
        sortable: false,
        value: "name"
      },
      { text: "Weight (Kgs)", value: "weight" },
      { text: "Breed", value: "breed" },
      {
        text: "Picture",
        value: "picture",
        sortable: false
      },
      { text: "Edit", value: "edit", sortable: false },
      {
        text: "Delete",
        value: "delete",
        sortable: false
      }
    ],
    cows: [
      {
        value: false,
        id: 1,
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
        id: 2,
        name: "baringo",
        weight: 345,
        breed: "ashyre",
        picture: "http/hshshhs/hdhdd",
        date: "1/1/2009",

        delete: "Delete"
      },
      {
        value: false,
        id: 3,
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
  getters: {
    getCow: (state) => (name) => {
      var cow = state.cows.find(function (obj) {
        return obj.name === name
      })
      return cow
    }
  },
  plugins: [vuexLocal.plugin]
})
