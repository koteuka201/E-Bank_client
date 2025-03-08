import axios from "axios";

export const api = axios.create({
  baseURL: 'http://158.160.18.15:5001',
})

api.interceptors.request.use((config) => {
  const authToken=localStorage.getItem('token')
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})