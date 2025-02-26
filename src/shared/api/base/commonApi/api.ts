import { COMMON_API_BASE_URL } from "@shared/config";
import axios from "axios";

export const api = axios.create({
  baseURL: COMMON_API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const authToken=localStorage.getItem('token')
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})