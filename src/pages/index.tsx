import { PrivateLayout } from "@shared/ui"
import { Route, Routes } from "react-router-dom"
import { AccountsRouting } from "./accounts"
import { NotFoundRouting } from "./notFound"
import { CreditsRouting } from "./credits"
import { WellcomePageRouting } from "./wellcome"
import { ClientsRouting } from "./clients"

export const Routing=()=>{

  return(
    <Routes>
      <Route 
        element={
          <PrivateLayout  />
        }
      >
        {ClientsRouting}
        {WellcomePageRouting}
        {CreditsRouting}
        {NotFoundRouting}
        {AccountsRouting}
      </Route>
    </Routes>
  )
}