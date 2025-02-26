import { LogOut } from "lucide-react"
import { useHandleClick } from "./useHandleClick"

export const LogOutButton=()=>{
  const handleClick=useHandleClick()

  return(
    <div className="cursor-pointer flex gap-1 font-semibold" onClick={handleClick}>
      <LogOut />
      <span>Выход</span>
    </div>
  )
}