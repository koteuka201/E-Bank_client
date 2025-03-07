import { Route } from "react-router-dom";
import { WellcomePage } from "./page";
import { WELCOME_PAGE_URL } from "@shared/config";

export const WellcomePageRouting=(
  <Route element={<WellcomePage />} path={WELCOME_PAGE_URL} />
)