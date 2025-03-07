import { Route } from "react-router-dom";
import { MyCreditsRouting } from "./myCredits";
import { CreditDetailsRouting } from "./creditDetails";

export const CreditsRouting=(
  <>
    <Route
      path="credits"
    >
      {MyCreditsRouting}
    </Route>
    <Route
      path="credit"
    >
      {CreditDetailsRouting}
    </Route>
  </>
)