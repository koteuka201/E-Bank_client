import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const GoBackButton=()=>{
  const navigate=useNavigate()

  return(
    <div className="flex gap-2 items-center cursor-pointer" onClick={()=>navigate(-1)}>
      <ArrowLeft />
      <span className="text-lg font-bold">Назад</span>
    </div>
  )
}