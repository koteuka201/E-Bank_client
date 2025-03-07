import { Route } from "react-router-dom";
import { MyCreditsRouting } from "./myCredits";
import { CreditDetailsRouting } from "./creditDetails";
import { CreditsCatalogRouting } from "./creditsCatalog";

export const CreditsRouting=(
  <>
    <Route
      path="credits"
    >
      {MyCreditsRouting}
      {CreditsCatalogRouting}
    </Route>
    <Route
      path="credit"
    >
      {CreditDetailsRouting}
    </Route>
  </>
)