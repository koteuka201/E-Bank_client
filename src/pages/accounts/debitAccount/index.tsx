import { Route } from "react-router-dom";
import { DebitAccountDetailsPage } from "./page";

export const DebitAccountDetailsRouting=(
  <Route
    element={<DebitAccountDetailsPage />}
    path="debit"
  >
    <Route element={<DebitAccountDetailsPage />} path=":id"/>
  </Route>
)