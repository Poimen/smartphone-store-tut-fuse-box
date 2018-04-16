import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, manufacturerGetters } from 'store/getters'
import { productMutations, cartMutations, manufacturerMutations } from 'store/mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  getters: Object.assign({}, productGetters, manufacturerGetters),
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
});

export default store;
