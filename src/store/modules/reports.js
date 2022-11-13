export default {
  namespaced: true,
  state() {
    return {
      lastId: 1,
      allReports: [
        // {
        //   id: 0,
        //   name: "test name1",
        //   type: true,
        //   category: 1,
        //   sum: 0,
        //   description: "ddd",
        //   date: "2022-11-09",
        // },
        // {
        //   id: 1,
        //   name: "test name 2",
        //   type: false,
        //   category: 0,
        //   sum: 2220,
        //   description: "ddd",
        //   date: "2022-11-10",
        // },
        // {
        //   id: 2,
        //   name: "test name 3",
        //   type: true,
        //   category: 2,
        //   sum: 1110,
        //   description:
        //     "ddd ddd ddd ddddddddd  vdddddd ddd sdf s sd fsd f g dfg fd g detfjhjk sgjhfgfgjh  jksdjhfg",
        //   date: "2022-11-12",
        // },
      ],
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
