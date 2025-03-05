import { Route } from "react-router-dom";
import { CreditAccountDetailsPage } from "./page";

export const CreaditAccountDetailsRouting=(
  <Route
    element={<CreditAccountDetailsPage />}
    path="credit"
  >
    <Route element={<CreditAccountDetailsPage />} path=":id"/>
  </Route>
)