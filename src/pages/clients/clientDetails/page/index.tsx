import { useGetUserProfile } from "@entities/clients"
import { WELCOME_PAGE_URL } from "@shared/config"
import { Spinner } from "@shared/ui"
import { GoBackButton } from "@widgets/goBackButton"
import { Navigate, useParams } from "react-router-dom"
import { Content } from "./blocks"

export const UserDetailsPage=()=>{

  const { id }=useParams<{id: string}>()

  if(!id) return <Navigate to={WELCOME_PAGE_URL} />

  const {data, isLoading, isFetching}=useGetUserProfile({id})

  if(isLoading || isFetching){
    return(
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    )
  }

  if(data==undefined){
    return(
      <>
        <GoBackButton />
        <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить профиль пользователя. Перезагрузите страницу или попробуйте позже!</div>
      </>
    )
  }

  return(
    <>
      <GoBackButton />
      <Content {...data} />
    </>
  )
}