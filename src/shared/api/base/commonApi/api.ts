import axios from "axios";

export const api = axios.create({
  baseURL: '/api1',
})

api.interceptors.request.use((config) => {
  const authToken=localStorage.getItem('token')
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})