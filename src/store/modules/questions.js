import {
  fetchQuestions
} from '@/api/questions'
export const formatRow = (row) => ({
  ...row,
  id: parseInt(row.id),
  shortBody: row.body.replace(/<[^>]+>/g, '').substr(0, 200) + '...'
})
export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, params) {
      commit('mutateLoading', true)
      return fetchQuestions(params)
        .then(result => {
          commit('mutateList', result.data.map(row => formatRow(row)))
          return result
        })
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateList: (state, questions) => {
      state.list = questions
    },
    mutateLoading: (state, loading) => {
      state.loading = loading
    }
  },
  getters: {
    getById: (state) => (id) => state.list.find(element => console.log(typeof element.id, typeof id) || element.id === id),
    getList: (state) => state.list,
    getLoading: (state) => state.loading
  }
}
