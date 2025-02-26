import { useLogout } from "@features/logout/api"
import { useCallback } from "react"

export const useHandleClick=()=>{
  const {mutate, isError}=useLogout()
  
  const handleClick=useCallback(()=>{
    mutate({})

    if(isError===false) localStorage.removeItem('token')
  },[mutate, isError])

  return handleClick
}