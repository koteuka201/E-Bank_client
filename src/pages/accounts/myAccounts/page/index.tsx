import { Suspense } from "react"
import { Container, Spinner } from "@shared/ui"
import { List } from "./blocks"

export const MyAccounts=()=>{
  return(
    <>
      <Container fluid>
        <div className="font-semibold text-2xl border-b">Кошелёк</div>
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}