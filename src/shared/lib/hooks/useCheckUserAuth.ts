import { useGetMyProfile, useGetUserConfig } from "@entities/clients"
import { useMemo } from "react"

export const useCheckUserAuth=()=>{
  const raw = sessionStorage.getItem('oidc.user:http://158.160.18.15:5004/:ebankclient')
  const JWTToken = raw ? JSON.parse(raw).access_token : localStorage.getItem('token')
  localStorage.setItem('token', JWTToken)

  const {data, isLoading, isError, isFetching}=useGetMyProfile()
  // const {data: configData, isLoading: isLoadingConfig, isFetching: isFetchingConfig}=useGetUserConfig({params: {device: 'browser'}, id: data?.id || ''})

  const isAuth=useMemo(()=>{
    if(!JWTToken) return false

    if((data==undefined || isError) && isLoading===false && isFetching===false) return false

    return true
  },[JWTToken, data,isError, isLoading, isFetching])
  
  const isManuallyBlock=useMemo(()=>{
    return data?.isManuallyBlocked || false
  },[data?.isManuallyBlocked])
  
  return {isAuth, isLoading: isLoading, isFetching, isManuallyBlock}
}