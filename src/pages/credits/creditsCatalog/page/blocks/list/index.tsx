import { useGetCreditsCatalog } from "@entities/credits"
import { CommonCard, Spinner } from "@shared/ui"
import { ListRenderer } from "../listRenderer"

export const List=()=>{
  
  const {data, isError, isLoading, isFetching}=useGetCreditsCatalog()
  
  if(isLoading || isFetching){
    return(
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    )
  }

  if(isError || data==undefined){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить кредиты. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  return(
    <CommonCard className="py-2 px-3 mt-4">
      <ListRenderer credits={data} />
    </CommonCard>
  )
}