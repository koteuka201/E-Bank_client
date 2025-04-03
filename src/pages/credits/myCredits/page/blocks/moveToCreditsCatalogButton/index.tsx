import { Card } from "@shared/components"
import { CREDITS_CATALOG_PAGE_URL } from "@shared/config"
import { CirclePlus } from "lucide-react"
import { Link } from "react-router-dom"

export const MoveToCreditsCatalogButton=()=>{
  return(
    <div className="grid grid-cols-12 mt-4">
      <div className="col-span-3">
        <Link to={CREDITS_CATALOG_PAGE_URL}>
          <Card className="p-3 cursor-pointer">
            <CirclePlus strokeWidth={1.5} size={28} />
            <div className="mt-[25px] font-semibold text-lg">Оформить</div>
            <div className="text-sm text-gray-600 font-semibold">новый кредит</div>
          </Card>
        </Link>
      </div>
    </div>
  )
}