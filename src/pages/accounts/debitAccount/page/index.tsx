import { useGetDebitAccountDetails } from "@entities/accounts"
import { GoBackButton } from "@widgets/goBackButton"
import { Navigate, useParams } from "react-router-dom"
import { CardBlock } from "./blocks"
import { MY_BANK_ACCOUNTS_PAGE_URL } from "@shared/config"
import { Spinner } from "@shared/ui"

export const DebitAccountDetailsPage=()=>{
  const {id}=useParams<{id:string}>()

  if(!id) return <Navigate to={MY_BANK_ACCOUNTS_PAGE_URL} />

  const {data, isLoading, isFetching}=useGetDebitAccountDetails({accountId: id})
  
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
        <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить ваш счёт. Перезагрузите страницу или попробуйте позже!</div>
      </>
    )
  }

  return(
    <>
      <GoBackButton />
      <CardBlock
        id={id}
        currencyType={data.bankAccount.currencyType}
        balance={data.bankAccount.balance}
        isFrozen={data.bankAccount.isFrozen}
        accountName={data.bankAccount.accountName}
        cardNumber={data.card.cardNumber}
        cardCategory={data.card.cardCategory}
        closeDateTime={data.bankAccount.closeDateTime}
      />
    </>
  )
}