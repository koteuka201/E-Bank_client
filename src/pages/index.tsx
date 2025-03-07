import { CREDITS_CATALOG_PAGE_URL, WELCOME_PAGE_URL } from "@shared/config"
import { PrivateLayout } from "@shared/ui"
import { Route, Routes } from "react-router-dom"
import { AccountsRouting } from "./accounts"
import { NotFoundRouting } from "./notFound"
import { CreditsRouting } from "./credits"
import { WellcomePageRouting } from "./wellcome"

export const Routing=()=>{
  const testcreditRouting= 
  <Route >
    <Route path={CREDITS_CATALOG_PAGE_URL} element={<div>credit</div>}/>
  </Route>

  return(
    <Routes>
      <Route 
        element={
          <PrivateLayout  />
        }
      >
        {WellcomePageRouting}
        {CreditsRouting}
        {NotFoundRouting}
        {AccountsRouting}
        {testcreditRouting}
      </Route>
    </Routes>
  )
}