export default {
  namespaced: true,
  state() {
    return {
      lastId: 3,
      allCategory: [
        {
          id: 0,
          name: "Учёба",
        },
        {
          id: 1,
          name: "Медицина",
        },
        {
          id: 2,
          name: "Еда",
        },
      ],
    };
  },

  mutations: {
    addNewCategory(state, data) {
      state.allCategory = [...state.allCategory, data];
    },

    changeLastId(state) {
      state.lastId = state.lastId + 1;
    },

    dellCategory(state, id) {
      state.allCategory = state.allCategory.filter((item) => item.id !== id);
    },
  },

  getters: {
    getAllCategory(state) {
      return state.allCategory;
    },

    getLastId(state) {
      return state.lastId;
    },
  },
};
