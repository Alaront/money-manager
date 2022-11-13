export default {
  namespaced: true,
  state() {
    return {
      valueCash: 30000,
      historyChangeCash: [
        30000,
        // 27780, 28890, 30000, 27780, 28890, 30000, 27780, 28890, 30000,
        // 27780, 28890, 30000, 27780, 30000, 30200, 27780, 28890, 30020, 27780,
        // 28190, 22200, 27180, 28280, 30000, 27280, 28110, 30000, 27180, 27180,
        // -32000,
      ],
      historyChangeCashDate: [
        "2022-11-09",
        // "2022-11-10",
        // "2022-11-12",
        // "2022-11-19",
        // "2022-11-20",
        // "2022-11-22",
        // "2022-12-09",
        // "2022-11-10",
        // "2022-12-12",
        // "2022-12-29",
        // "2022-12-20",
        // "2022-12-22",
        //
        // "2023-11-09",
        // "2023-11-10",
        // "2023-11-12",
        // "2023-11-19",
        // "2023-11-20",
        // "2023-11-22",
        // "2023-12-09",
        // "2023-11-10",
        // "2023-12-12",
        // "2023-12-29",
        // "2023-12-20",
        // "2023-12-22",
        //
        // "2024-11-09",
        // "2024-11-10",
        // "2024-11-12",
        // "2024-11-19",
        // "2024-11-20",
        // "2024-11-22",
        // "2024-12-09",
        // "2024-11-10",
        // "2024-12-12",
        // "2024-12-29",
        // "2024-12-20",
        //"2024-12-22",
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
  },
};
