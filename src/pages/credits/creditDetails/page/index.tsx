import { useGetCreditDetails } from "@entities/credits"
import { MY_CREDITS_PAGE_URL } from "@shared/config"
import { Spinner } from "@shared/ui"
import { GoBackButton } from "@widgets/goBackButton"
import { Navigate, useParams } from "react-router-dom"
import { Content } from "./blocks"

export const CreditDetailsPage=()=>{
  const {id}=useParams<{id: string}>()

  if(!id) return <Navigate to={MY_CREDITS_PAGE_URL} />

  const {data, isLoading, isFetching}=useGetCreditDetails({CreditId: id})

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
        <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить подробную информацию о вашем кредите. Перезагрузите страницу или попробуйте позже!</div>
      </>
    )
  }
  
  return(
    <>
      <GoBackButton />
      <Content 
        id={data.id}
        createDateTime={data.createDateTime}
        accountNumber={data.accountNumber}
        isFrozen={data.isFrozen}
        currencyType={data.currencyType}
        balance={data.balance}
        debt={data.debt}
        creditLimit={data.tariff.creditLimit}
        minimumPayment={data.tariff.minimumPayment}
        tariffName={data.tariff.name}
        interestRate={data.tariff.interestRate}
        paymentType={data.tariff.paymentType}
      />
    </>
  )
}