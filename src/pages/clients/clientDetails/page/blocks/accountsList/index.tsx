import { useGetAccounts } from "@entities/accounts"
import { BankAccountsRenderer } from "@pages/accounts/myAccounts/page/blocks"
import { Spinner } from "@shared/ui"

export type AccountsListProps={
  id: string
}

export const AccountsList=({id}: AccountsListProps)=>{

  const {data, isError, isLoading, isFetching}=useGetAccounts({userId: id})
  
  if(isLoading || isFetching){
    return(
      <div className="flex justify-center">
        <Spinner />
      </div>
    )
  }

  if(isError || data=== undefined){
    return(
      <div className="text-center font-semibold text-lg">Не удалось загрузить счета пользователя. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  return <BankAccountsRenderer accounts={data?.cardBankAccounts} />
}