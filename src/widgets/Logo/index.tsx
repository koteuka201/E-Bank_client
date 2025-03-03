import { WELCOME_PAGE_URL } from "@shared/config"
import { CircleCheckBig } from "lucide-react"
import { Link } from "react-router-dom"

export const LogoBlock=()=>{
  return(
    <Link to={WELCOME_PAGE_URL} className="flex gap-1.5 items-center">
      <CircleCheckBig size={24} className="text-green-500"/>
      <span className="font-bold text-[20px] text-green-500 italic mt-[6px]">E-Bank</span>
    </Link>
  )
}