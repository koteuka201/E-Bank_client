import { useGetAccountsPaymentsHistory, useGetMyAccountsPaymentsHistory } from "@entities/accounts/paymentHistory"
import { Spinner } from "@shared/ui"
import { PaymentItem } from "../paymentItem"
import { useGetMyProfile } from "@entities/clients"
import { UserRole } from "@shared/api"
import { Card } from "@shared/components"

export type ListProps={
  readonly id: string
}

export const List=({id}: ListProps)=>{

  const {data: profileData}=useGetMyProfile()

  const myHistory = useGetMyAccountsPaymentsHistory(id, import.meta.env["VITE_APP_TYPE"]===UserRole.Employee ? 'other' : 'my')
  const commonHistory = useGetAccountsPaymentsHistory({
    UsersIds: undefined,
    BankAccountsIds: [id],
    OperationDateTime: undefined,
    BankAccountOperationInitiator: undefined,
    BankAccountOperationStatus: undefined,
    BankAccountType: undefined
  })

const { data } =
  profileData?.role !== UserRole.Client
    ? myHistory
    : commonHistory
  
    if(
      // isError || 
      data == undefined){
      return(
        <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить историю операций по вашему счету. Перезагрузите страницу или попробуйте позже!</div>
      )
    }
  
  return(
    <Card className="py-2 px-3 mt-4">
      {data.bankAccountOperations.length === 0 &&
        <div className="text-center font-semibold text-lg">
          По этому счёту еще не были совершены операции! 
        </div>
      }
      <div className="grid gap-1.5">
        {data.bankAccountOperations.map((payment, index)=>(
          <PaymentItem key={index} {...payment} />
        ))}
      </div>
    </Card>
  )
}