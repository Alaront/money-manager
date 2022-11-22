export default {
  namespaced: true,
  state() {
    return {
      lastId: 1,
      allReports: [],
    };
  },
  mutations: {
    addNewReport(state, data) {
      state.allReports = [...state.allReports, { ...data, id: state.lastId }];
      state.lastId = state.lastId + 1;
    },
  },

  getters: {
    getAllReports(state) {
      return state.allReports;
    },

    getLastId(state) {
      return state.lastId;
    },
  },
};
