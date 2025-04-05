import { PrivateLayout } from "@shared/ui"
import { Route, Routes } from "react-router-dom"
import { AccountsRouting } from "./accounts"
import { NotFoundRouting } from "./notFound"
import { CreditsRouting } from "./credits"
import { WellcomePageRouting } from "./wellcome"
import { ClientsRouting } from "./clients"
import { LoginRouting } from "./login"
import { RegistrationPageRouting } from "./register"
import { BannedPageRouting } from "./bannedPage"
import { RedirectRouting } from "./redirect"

export const Routing=()=>{

  return(
    <Routes>
      <Route>
        {BannedPageRouting}
        {LoginRouting}
        {RegistrationPageRouting}
        {RedirectRouting}
      </Route>
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