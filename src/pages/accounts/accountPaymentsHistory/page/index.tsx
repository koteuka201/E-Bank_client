import { Suspense } from "react"
import { useParams } from "react-router-dom"
import { useGetDebitAccountDetails } from "@entities/accounts"
import { Container, Spinner } from "@shared/ui"
import { List } from "./blocks"
import { GoBackButton } from "@widgets/goBackButton"

export const AccountPaymentsHistory=()=>{
  
  const {id}=useParams<{id: string}>()

  if(!id){
    return(
      <div className="text-center font-semibold text-lg mt-10">Не удалось загрузить историю операций по вашему счету. Перезагрузите страницу или попробуйте позже!</div>
    )
  }

  const {data}=useGetDebitAccountDetails({accountId: id})

  return(
    <>
      <Container fluid>
        <GoBackButton />
        <div className="font-semibold text-2xl border-b mt-3">История операций по счёту - {data?.bankAccount.accountName}</div>
        <Suspense fallback={<Spinner />}>
          <List id={id} />
        </Suspense>
      </Container>
    </>
  )  
}