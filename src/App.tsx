import { Routing } from "./pages"

const App=()=>{
  console.log(import.meta.env["VITE_APP_TYPE"])
  return (
    <Routing/>
  )
}

export default App
