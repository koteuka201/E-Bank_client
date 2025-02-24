import { CREDITS_CATALOG_PAGE_URL, MY_BANK_ACCOUNTS_PAGE_URL } from "@shared/config"
import { Route, Routes } from "react-router-dom"

export const Routing=()=>{
  return(
    <Routes>
      <Route path={MY_BANK_ACCOUNTS_PAGE_URL} element={
        <div>счета</div>
      } />
      <Route path={CREDITS_CATALOG_PAGE_URL} element={
        <div>каталог кредитов</div>
      } />
    </Routes>
  )
}