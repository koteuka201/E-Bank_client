import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { ActualizeStorage, useCheckUserAuth } from "@shared/lib"
import { BaseLayout } from "../mainLayout"
import { BANNED_PAGE_URL, LOGIN_PAGE_URL } from "@shared/config"
import { Spinner } from "@shared/ui/atoms"
import { ApiTagsEnum } from "@shared/api"
import { useQueryClient } from "@tanstack/react-query"


export const PrivateLayout=()=>{
  
  const queryClient = useQueryClient()
  const {isAuth, isLoading, isFetching, isManuallyBlock}=useCheckUserAuth()

  useEffect(()=>{
    ActualizeStorage()
  },[])

  // if(isLoading || isFetching){
  //   return(
  //     <div className="flex justify-center mt-10">
  //       <Spinner />
  //     </div>
  //   )
  // }
  
  if(isManuallyBlock===true){
    localStorage.removeItem('token')
    queryClient.invalidateQueries({ queryKey: [ApiTagsEnum.ClientProfile] })
    return <Navigate to={BANNED_PAGE_URL} />
  }

  // if(!isAuth && isLoading===false){
  //   return <Navigate to={LOGIN_PAGE_URL} />
  // }
  
  return(
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  ) 
}