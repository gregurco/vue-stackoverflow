import API from './api'

export const fetchQuestions = (params) => API.get('/questions', { params })
