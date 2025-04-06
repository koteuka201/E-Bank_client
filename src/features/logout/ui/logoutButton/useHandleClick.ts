import { ApiTagsEnum } from "@shared/api"
import { LOGIN_PAGE_URL } from "@shared/config"
import { useQueryClient } from "@tanstack/react-query"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const useHandleClick=()=>{
  
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const handleClick=useCallback(()=>{
    document.documentElement.classList.remove("dark")
    localStorage.clear()
    sessionStorage.clear()
    queryClient.invalidateQueries({ queryKey: [ApiTagsEnum.ClientProfile] })
    navigate(LOGIN_PAGE_URL)
  },[navigate, queryClient])

  return handleClick
}