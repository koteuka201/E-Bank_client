import { useGetCreditById } from "@entities/credits"
import { ListRenderer } from "@pages/credits/myCredits/page/blocks"
import { Spinner } from "@shared/ui"

export type CreditsListProps={
  id: string
}

export const CreditsList=({id}: CreditsListProps)=>{

  const {data, isError, isLoading, isFetching}=useGetCreditById({UserId: id})
  
  if(isLoading || isFetching){
    return(
      <div className="flex justify-center">
        <Spinner />
      </div>
    )
  }

  if(isError || data=== undefined){
    return(
      <div className="text-center font-semibold text-lg">Не удалось загрузить кредиты пользователя. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  return <ListRenderer credits={data} />
}