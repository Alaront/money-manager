export default {
  namespaced: true,
  state() {
    return {
      valueCash: 30000,
      historyChangeCash: [30000],
      historyChangeCashDate: ["2022-11-09"],
      pairExchange: {
        USD: 1,
        EUR: 1,
        JPY: 1,
      },
    };
  },

  mutations: {
    changeCashStore(state, data) {
      state.valueCash = data;
    },

    changeCashOther(state, data) {
      if (data.flag) {
        state.valueCash = state.valueCash + data.sum;
      } else {
        state.valueCash = state.valueCash - data.sum;
      }

      state.historyChangeCash = [...state.historyChangeCash, state.valueCash];
      state.historyChangeCashDate = [...state.historyChangeCashDate, data.date];
    },
  },

  getters: {
    getValueCash(state) {
      return state.valueCash;
    },

    getHistoryChangeCash(state) {
      return state.historyChangeCash;
    },

    getHistoryChangeCashDate(state) {
      return state.historyChangeCashDate;
    },

    getPairExchange(state) {
      return state.pairExchange;
    },
  },
};
