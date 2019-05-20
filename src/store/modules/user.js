import {
  fetchUsers
} from '@/api/users'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      fetchUsers()
        .then(result => commit('mutateList', result.data))
    }
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    }
  },
  getters: {
    getList: (state) => state.list
  }
}
