export default {
  namespaced: true,
  state() {
    return {
      valueCash: 30000,
      historyChangeCash: [30000],
      historyChangeCashDate: ["2022-11-09"],
      pairExchange: [
        {
          id: 1,
          value: "RUB-USD",
          status: true,
          data: 1,
          key: "USD",
        },
        {
          id: 2,
          value: "RUB-EUR",
          status: true,
          data: 1,
          key: "EUR",
        },
        {
          id: 3,
          value: "RUB-JPY",
          status: true,
          data: 1,
          key: "JPY",
        },
        {
          id: 4,
          value: "RUB-CHF",
          status: false,
          data: 1,
          key: "CHF",
        },
        {
          id: 5,
          value: "RUB-CZK",
          status: false,
          data: 1,
          key: "CZK",
        },
        {
          id: 6,
          value: "RUB-FJD",
          status: false,
          data: 1,
          key: "FJD",
        },
        {
          id: 7,
          value: "RUB-IDR",
          status: false,
          data: 1,
          key: "IDR",
        },
        {
          id: 8,
          value: "RUB-NOK",
          status: false,
          data: 1,
          key: "NOK",
        },
        {
          id: 9,
          value: "RUB-TMT",
          status: false,
          data: 1,
          key: "TMT",
        },
        {
          id: 10,
          value: "RUB-UAH",
          status: false,
          data: 1,
          key: "UAH",
        },
        {
          id: 11,
          value: "RUB-XDR",
          status: false,
          data: 1,
          key: "XDR",
        },
        {
          id: 12,
          value: "RUB-BTN",
          status: false,
          data: 1,
          key: "BTN",
        },
      ],
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

    changePairStatus(state, id) {
      state.pairExchange = state.pairExchange.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status,
          };
        } else {
          return item;
        }
      });
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
