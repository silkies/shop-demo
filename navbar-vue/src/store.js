import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    cartKey: 'CART_PRODUCTS',
    quantity: 0
  },
  getters: {
    getProductsInCart: state => state.cartProducts,
    getQuantityInCart: state => state.quantity,
  },
  mutations: {
    updateQuantity(state) {
      var quantity = 0;

      state.cartProducts = JSON.parse(localStorage.getItem(state.cartKey));
      console.log(state.cartProducts, 'products')

      if (state.cartProducts) {
        state.cartProducts.forEach(el => {
          quantity = quantity + el.quantity;

        })
        state.quantity = quantity;
      }
    }
  },
  actions: {
    computeProductsInCart: function (context) {
      context.commit('updateQuantity');
    }
  }
});
