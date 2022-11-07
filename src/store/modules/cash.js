export default {
  namespaced: true,
  state() {
    return {
      valueCash: 30000,
    };
  },

  mutations: {
    changeCashStore(state, data) {
      state.valueCash = data;
    },
  },

  getters: {
    getValueCash(state) {
      return state.valueCash;
    },
  },
};
