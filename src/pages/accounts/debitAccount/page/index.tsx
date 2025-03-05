import { GoBackButton } from "@widgets/goBackButton"
import { useParams } from "react-router-dom"

export const DebitAccountDetailsPage=()=>{
  const {id}=useParams<{id:string}>()

  return(
    <div>
      <GoBackButton />
    </div>
  )
}