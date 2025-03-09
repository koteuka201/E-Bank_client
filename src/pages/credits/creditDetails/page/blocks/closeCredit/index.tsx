import { useCloseCredit } from "@features/credits"
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@shared/components"
import { useSwitch } from "@shared/lib"

export type CloseCreditButtonProps={
  readonly creditId: string 
  readonly canBeClosed: boolean
}

export const CloseCreditButton=({creditId, canBeClosed}:CloseCreditButtonProps)=>{

  const {mutate: closeAccount}=useCloseCredit({creditId})
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <Button className="text-sm mt-2" size={'sm'} type="button" variant={'destructive'} onClick={handleOpen}>
        Закрыть кредитный счёт
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Закрытие кредитного счёта</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {canBeClosed ? (
            <span>Вы уверены, что хотите закрыть кредит?</span>
          ): (
            <span>Вы не можете закрыть кредит, пока не погасите долг по нему</span>
          )}
        </DialogDescription>
        <DialogFooter className="mt-4">
          <Button type="button" variant={'gray'} onClick={handleClose}>
            Отмена
          </Button>
          <Button disabled={!canBeClosed} type="button" variant={'destructive'} onClick={()=>closeAccount({data:{}}, {onSuccess: handleClose})}>
            Закрыть
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}