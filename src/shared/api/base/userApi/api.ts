import { USER_API_BASE_URL } from "@shared/config";
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.request.use((config) => {
  const authToken=localStorage.getItem('token')
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})