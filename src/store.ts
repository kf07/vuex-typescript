import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 as number | null,
    name: null as string | null
  },
  getters: {
    getName(state,getters) {
      return state.name
    },
    greet(state, getters) {
      return `My name is ${(getters.getName as string).toUpperCase()}`
    }
  },
  mutations: {
    setName(state,payload: string) {
      state.name = payload
    },
    increment(state) {
      state.count++
    }
  },
  actions: {
    asyncSetName({ ctx,payload }) {
      ctx.commit('setName', {name: payload})
      console.log(ctx.state.count)
    },
    asyncIncrement(ctx) {
      ctx.commit('increment')
      console.log(ctx.state.name)
    },
    async countup(ctx) {
      while (true) {
        await (()=> new Promise(resolve => {
          setTimeout(resolve, 1000)
        }))()
        ctx.dispatch('increment')
      }
    }
  }
})
