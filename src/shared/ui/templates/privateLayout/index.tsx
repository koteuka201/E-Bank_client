import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { ActualizeStorage, useCheckUserAuth } from "@shared/lib"
import { BaseLayout } from "../mainLayout"
import { REGISTER_PAGE_URL } from "@shared/config"


export const PrivateLayout=()=>{
  const {isAuth, isLoading}=useCheckUserAuth()

  useEffect(()=>{
    ActualizeStorage()
  },[])

  if(isLoading) return <>...Loading</>
  
  if(!isAuth && isLoading===false){
    return <Navigate to={REGISTER_PAGE_URL} />
  }
  
  return(
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  ) 
}