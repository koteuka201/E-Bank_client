import { Container, Spinner } from "@shared/ui"
import { Suspense } from "react"
import { List } from "./blocks"
import { CreateCreditTariffButton } from "./blocks/createCreditTariffButton"

export const CreditsCatalog=()=>{
  return(
    <>
      <Container fluid>
        <div className="font-semibold text-2xl border-b">Каталог кредитов</div>
        <CreateCreditTariffButton />
        {/* roleCheck */}
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}