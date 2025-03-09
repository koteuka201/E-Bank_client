import { UserRole } from "@shared/api"
import { Container, Spinner } from "@shared/ui"
import { CreateUserButton } from "@widgets/users"
import { Suspense } from "react"
import { List } from "./blocks"

export const EmploeeFeedPage=()=>{
  return(
    <Container fluid>
      {/* roleCheck */}
      <div className="font-semibold text-2xl border-b">Сотрудники банка</div>
      <CreateUserButton userRole={UserRole.Employee} /> 
      <Suspense fallback={<Spinner />}>
        <List />
      </Suspense>
    </Container>
  )
}