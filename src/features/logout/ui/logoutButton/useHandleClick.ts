import { LOGIN_PAGE_URL } from "@shared/config"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const useHandleClick=()=>{
  
  const navigate = useNavigate()

  const handleClick=useCallback(()=>{
    localStorage.removeItem('token')
    navigate(LOGIN_PAGE_URL)
  },[navigate])

  return handleClick
}