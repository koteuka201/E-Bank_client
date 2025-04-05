import { Suspense } from "react"
import { Container, Spinner } from "@shared/ui"
import { List, MoveToCreditsCatalogButton } from "./blocks"
import { CreditRaitingModal } from "@entities/credits"

export const MyCredits=()=>{
  return(
    <>
      <Container fluid>
        <div className="font-semibold border-b">
          <span className="text-2xl">Мои кредиты</span>
          <CreditRaitingModal raitingType={"my"} />
        </div>
        <MoveToCreditsCatalogButton />
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}