import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        categories:[
            {name:'足球',num:23},
            {name:'篮球',num:24},
            {name:'台球',num:25},
            {name:'棒球',num:26},
        ],


  },
  getters:{
    categories(state){
      let categories=state.categories.map(item=>{
        return {
          name:'vip'+ item.name,
          num:item.num*2
        }
      })


      return categories
    },

  },
  mutations: {
    add(state){
      setTimeout(function () {
        state.categories.map(item=>{
          item.num+=1
        })
      },1000)

    },
    list(state){
      setTimeout(function () {
        state.categories.map(item=>{
          item.num-=1
        })
      },1000)

    },
  },
  actions: {
    add(context){
      setTimeout(function () {
        context.commit('add')
      },1000)
    },
   list(context){
      setTimeout(function () {
        context.commit('list')
      },1000)
    }
  }
})
