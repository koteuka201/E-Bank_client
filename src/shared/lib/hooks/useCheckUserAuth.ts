import { useMemo } from "react"

export const useCheckUserAuth=()=>{
  const JWTToken=localStorage.getItem('token')
  
  //{}=useGetUser(JWTToken)
  const userData=true
  const isError=false
  const isLoading=false

  const isAuth=useMemo(()=>{
    if(!JWTToken) return false

    if((userData==undefined || isError) && isLoading===false) return false

    return true
  },[JWTToken, userData,isError, isLoading])
  
  return {isAuth, isLoading}
}