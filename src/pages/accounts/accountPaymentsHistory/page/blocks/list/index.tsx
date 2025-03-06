import { useGetAccountsPaymentsHistory } from "@entities/accounts/paymentHistory"
import { CommonCard, Spinner } from "@shared/ui"
import { PaymentItem } from "../paymentItem"

export type ListProps={
  readonly id: string
}

export const List=({id}: ListProps)=>{

  const {data, isError, isLoading, isFetching}=useGetAccountsPaymentsHistory({
    UsersIds: undefined,
    BankAccountsIds: [id],
    OperationDateTime: undefined,
    BankAccountOperationInitiator: undefined,
    BankAccountOperationStatus: undefined,
    BankAccountType: undefined
  })
  
    if(isLoading || isFetching){
      return(
        <div className="flex justify-center mt-10">
          <Spinner />
        </div>
      )
    }
  
    if(isError || data == undefined){
      return(
        <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить историю операций по вашему счету. Перезагрузите страницу или попробуйте позже!</div>
      )
    }

  return(
    <CommonCard className="py-2 px-3 mt-4 bg-white">
      {data.length === 0 &&
        <div className="text-center font-semibold text-lg">
          По этому счёту еще не были совершены операции! 
        </div>
      }
      <div className="grid gap-1.5">
        {data.map((payment, index)=>(
          <PaymentItem key={index} {...payment} />
        ))}
      </div>
    </CommonCard>
  )
}