import { CREDITS_CATALOG_PAGE_URL, MY_BANK_ACCOUNTS_PAGE_URL, WELCOME_PAGE_URL } from "@shared/config"
import { PrivateLayout } from "@shared/ui"
import { Route, Routes } from "react-router-dom"

export const Routing=()=>{
  
  const testAccountRouting= 
  <Route >
    <Route path={MY_BANK_ACCOUNTS_PAGE_URL} element={<div>acc</div>}/>
  </Route>
  const testcreditRouting= 
  <Route >
    <Route path={CREDITS_CATALOG_PAGE_URL} element={<div>credit</div>}/>
  </Route>
  const testwellRouting= 
  <Route >
    <Route path={WELCOME_PAGE_URL} element={<div>well</div>}/>
  </Route>

  return(
    <Routes>
      <Route 
        element={
          <PrivateLayout  />
        }
      >
        {testAccountRouting}
        {testwellRouting}
        {testcreditRouting}
      </Route>
    </Routes>
  )
}