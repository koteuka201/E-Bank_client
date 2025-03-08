import { useBlockUser } from "@features/users"
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@shared/components"
import { useSwitch } from "@shared/lib"

export type BlockUserButtonProps={
  readonly id: string 
}

export const BlockUserButton=({id}:BlockUserButtonProps)=>{

  const {mutate: blockUser}=useBlockUser({id, isBlocked: true})
  const [isOpen, , ,handleClose, handleOpen]=useSwitch()
  
  return(
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <Button className="text-sm" size={'sm'} type="button" variant={'destructive'} onClick={handleOpen}>
        Заблокировать
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Блокировка пользователя</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Вы уверены, что хотите заблокировать пользователя
        </DialogDescription>
        <DialogFooter className="mt-4">
          <Button type="button" variant={'gray'} onClick={handleClose}>
            Отмена
          </Button>
          <Button type="button" variant={'destructive'} onClick={()=>blockUser({data:{}}, {onSuccess: handleClose})}>
            Заблокировать
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}