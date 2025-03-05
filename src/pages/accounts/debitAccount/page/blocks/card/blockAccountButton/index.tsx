import { useCloseAccount } from "@features/accounts"
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@shared/components"
import { useSwitch } from "@shared/lib"

export type CloseAccountButtonProps={
  readonly accountId: string 
}

export const CloseAccountButton=({accountId}:CloseAccountButtonProps)=>{

  const {mutate: closeAccount}=useCloseAccount({accountId})
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <Button type="button" variant={'destructive'} onClick={handleOpen}>
        Закрыть счёт
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Закрытие счёта</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Вы уверены, что хотите закрыть данный счет?
        </DialogDescription>
        <DialogFooter className="mt-4">
          <Button type="button" variant={'gray'} onClick={handleClose}>
            Отмена
          </Button>
          <Button type="button" variant={'destructive'} onClick={()=>closeAccount({data:{}}, {onSuccess: handleClose})}>
            Закрыть
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}