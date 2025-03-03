import { useGetMyAccounts } from "@entities/accounts"

export const List=()=>{
  
  const {data, isError}=useGetMyAccounts({userId: ''})

  if(!isError){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить ваши счета. Перезагрузите страницу или попробуйте позже!</div>
    )
  }
  
  return(
    <>{data?.creditCardBankAccounts}</>
  )
}