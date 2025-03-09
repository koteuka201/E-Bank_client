import { useGetMyProfile } from "@entities/clients"
import { useMemo } from "react"

export const useCheckUserAuth=()=>{
  const JWTToken=localStorage.getItem('token')
  
  const {data, isLoading, isError, isFetching}=useGetMyProfile()

  const isAuth=useMemo(()=>{
    if(!JWTToken) return false

    if((data==undefined || isError) && isLoading===false && isFetching===false) return false

    return true
  },[JWTToken, data,isError, isLoading, isFetching])
  
  const isManuallyBlock=useMemo(()=>{
    return data?.isManuallyBlocked || false
  },[data?.isManuallyBlocked])
  
  return {isAuth, isLoading, isFetching, isManuallyBlock}
}