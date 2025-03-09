import { Container, Spinner } from "@shared/ui"
import { Suspense } from "react"
import { List } from "./blocks"
import { CreateUserButton } from "@widgets/users"
import { UserRole } from "@shared/api"

export const ClientFeed=()=>{
  return(
    <>
      <Container fluid>
        <div className="font-semibold text-2xl border-b">Клиенты банка</div>
        <CreateUserButton userRole={UserRole.Client} /> 
        <Suspense fallback={<Spinner />}>
          <List />
        </Suspense>
      </Container>
    </>
  )
}