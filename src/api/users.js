import API from './api'

export const fetchUsers = (params) => API.get('/users', { params })
