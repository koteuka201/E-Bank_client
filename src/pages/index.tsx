import { CREDITS_CATALOG_PAGE_URL, WELCOME_PAGE_URL } from "@shared/config"
import { PrivateLayout } from "@shared/ui"
import { Route, Routes } from "react-router-dom"
import { AccountsRouting } from "./accounts"
import { NotFoundRouting } from "./notFound"
import { CreditsRouting } from "./credits"

export const Routing=()=>{
  const testcreditRouting= 
  <Route >
    <Route path={CREDITS_CATALOG_PAGE_URL} element={<div>credit</div>}/>
  </Route>
  const testwellRouting= 
  <Route >
    <Route path={WELCOME_PAGE_URL} element={<h2>well</h2>}/>
  </Route>

  return(
    <Routes>
      <Route 
        element={
          <PrivateLayout  />
        }
      >
        {CreditsRouting}
        {NotFoundRouting}
        {AccountsRouting}
        {testwellRouting}
        {testcreditRouting}
      </Route>
    </Routes>
  )
}