import { Suspense } from "react"
import { Container, Spinner } from "@shared/ui"
import { List } from "./blocks"

export const MyCredits=()=>{
  return(
    <>
      <Container fluid>
        <div className="font-semibold text-2xl border-b">Мои кредиты</div>
        <Suspense fallback={<Spinner />}>
          <List id="1" />
        </Suspense>
      </Container>
    </>
  )
}