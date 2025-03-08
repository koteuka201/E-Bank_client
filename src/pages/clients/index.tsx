import { Route } from "react-router-dom";
import { ClientsFeedRouting } from "./clientsFeed";

export const ClientsRouting=(
  <>
    <Route
      path="clients"
    >
      {ClientsFeedRouting}
    </Route>
  </>
)