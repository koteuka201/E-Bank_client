import {  useGetUsersFeed } from "@entities/clients"
import { UserRole } from "@shared/api"
import { Card } from "@shared/components"
import { Spinner } from "@shared/ui"
import { UsersListRenderer } from "@widgets/users"

export const List=()=>{

  const {data, isError, isLoading, isFetching}=useGetUsersFeed({
    userRole: UserRole.Client,
    pageSize: 1000
  })
  
  if(isLoading || isFetching){
    return(
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    )
  }

  if(isError || data==undefined){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить пользователей. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  return(
    <Card className="py-2 px-3 mt-4">
      <UsersListRenderer users={data.users} />
    </Card>
  )
}