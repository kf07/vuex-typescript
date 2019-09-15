import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface State {
  count: number
}
const state:State = {
  count: 0
}

interface IGetters {
  double: number
  expo2: number
  expo: (amount: number) => number
}

type Getters<S, G> = {
  [K in keyof G]: (state: S,getters: G) => G[K]
}

const getters:Getters<State, IGetters> = {
  double(state,getters) {
    console.log(getters.expo2)
    return state.count * 2
  },
  expo2(state,getters) {
    console.log(getters.expo);
    return state.count ** 2
  },
  expo(state,getters) {
    console.log(getters.double);
    return amount =>  state.count ** amount
  }
}