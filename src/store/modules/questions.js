import {
  fetchQuestions
} from '@/api/questions'
export const formatRow = (row) => ({
  ...row,
  shortBody: row.body.replace(/<[^>]+>/g, '').substr(0, 200)
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
      fetchQuestions(params)
        .then(result => commit('mutateList', result.data.map(row => formatRow(row))))
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
    getList: (state) => state.list,
    getLoading: (state) => state.loading
  }
}
