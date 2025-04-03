import { useGetMyCredits } from "@entities/credits"
import { Spinner } from "@shared/ui"
import { ListRenderer } from "../listRenderer"
import { Card } from "@shared/components"

export const List=()=>{
  
  const {data, isError, isLoading, isFetching}=useGetMyCredits()

  if(isLoading || isFetching){
    return(
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    )
  }

  if(isError || data==undefined){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить ваши кредиты. Перезагрузите страницу или попробуйте позже!</div>
    )
  }
  
  return(
    <Card className="py-2 px-3 mt-4">
      <ListRenderer credits={data} />
    </Card>
  )
}