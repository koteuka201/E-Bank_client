import { BANK_ACCOUNTS_START_URL } from "@shared/config"
import { Route, Routes } from "react-router-dom"

export const Routing=()=>{
  return(
    <Routes>
      <Route path={BANK_ACCOUNTS_START_URL} element={
        <div>счета</div>
      } />
    </Routes>
  )
}