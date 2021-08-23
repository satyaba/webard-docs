export default new Vuex.Store({
  state: {
    pageStructure: {},
    count: 11,
  },
  mutations: {
    updatePageStructure: function (state, structure) {
      state.pageStructure = structure;
    },
  },
  actions: {
    updatePageStructureAction: function ({ commit }, structure) {
      commit("updatePageStructure", structure);
    },
  },
});
