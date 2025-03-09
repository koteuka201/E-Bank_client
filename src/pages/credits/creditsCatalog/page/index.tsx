import { Container, Spinner } from "@shared/ui"
import { Suspense } from "react"
import { List } from "./blocks"
import { CreateCreditTariffButton } from "./blocks/createCreditTariffButton"
import { useGetMyProfile } from "@entities/clients"
import { UserRole } from "@shared/api"

export const CreditsCatalog=()=>{

  const {data}=useGetMyProfile()

  return(
    <>
      <Container fluid>
        <div className="font-semibold text-2xl border-b">Каталог кредитов</div>
        {data?.role===UserRole.Employee && <CreateCreditTariffButton />}
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}