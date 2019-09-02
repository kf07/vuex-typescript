import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface State {
  count: number
}

const state:State = {
  count: 0
}

type Getters<S> = {
  [k: string]: (state: S) => unknown
}

const getters:Getters<State> = {
  double(state) {
    return state.count * 2
  },
  expo2(state) {
    return state.count ** 2
  },
  expo(state) {
    return amount =>  state.count ** amount
  }
}