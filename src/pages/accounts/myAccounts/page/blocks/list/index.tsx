import { useGetMyAccounts } from "@entities/accounts"

export const List=()=>{
  
  const {data, isError}=useGetMyAccounts({userId: ''})

  if(isError){
    return(
      <div className="">Не удалось загрузить ваши счета. Перезагрузите страницу или попробуйте позже!</div>
    )
  }
  
  return(
    <>{data}</>
  )
}