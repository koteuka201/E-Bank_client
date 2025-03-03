import { Suspense } from "react"
import { Container, Spinner } from "@shared/ui"
import { List } from "./blocks"

export const MyAccounts=()=>{
  return(
    <>
      <Container fluid>
        <h2 className="font-semibold mt-0 border-b">Кошелёк</h2>
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}