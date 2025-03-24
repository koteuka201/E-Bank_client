import { useCloseAccount } from "@features/accounts"
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@shared/components"
import { useSwitch } from "@shared/lib"

export type CloseAccountButtonProps={
  readonly accountId: string 
  readonly canBeClosed: boolean
}

export const CloseAccountButton=({accountId, canBeClosed}:CloseAccountButtonProps)=>{

  const {mutate: closeAccount, isPending}=useCloseAccount({accountId})
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <Button className="text-sm" size={'sm'} type="button" variant={'destructive'} onClick={handleOpen}>
        Закрыть счёт
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Закрытие счёта</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {canBeClosed ? (
            <span>Вы уверены, что хотите закрыть данный счет?</span>
          ): (
            <span>Невозможно закрыть счет с остатком. Пожалуйста, снимите все средства перед закрытием!</span>
          )}
          
        </DialogDescription>
        <DialogFooter className="mt-4">
          <Button type="button" variant={'gray'} onClick={handleClose}>
            Отмена
          </Button>
          <Button isLoading={isPending} disabled={!canBeClosed} type="button" variant={'destructive'} onClick={()=>closeAccount({data:{}}, {onSuccess: handleClose})}>
            Закрыть
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}