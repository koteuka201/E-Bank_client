import { Container, Spinner } from "@shared/ui"
import { Suspense } from "react"
import { List } from "./blocks"
import { CreateCreditTariffButton } from "./blocks/createCreditTariffButton"
import { UserRole } from "@shared/api"

export const CreditsCatalog=()=>{

  return(
    <>
      <Container fluid>
        <div className="font-semibold text-2xl border-b">Каталог кредитов</div>
        {import.meta.env["VITE_APP_TYPE"] !== UserRole.Client && <CreateCreditTariffButton />}
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}