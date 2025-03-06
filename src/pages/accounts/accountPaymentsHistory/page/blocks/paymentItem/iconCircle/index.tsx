export type IconCircleProps={
  icon: React.ReactNode
  color: string
}

export const IconCircle=({icon, color}: IconCircleProps)=>{
  return(
    <div
      className={`inline-flex justify-center items-center rounded-full w-[26px] h-[26px] ${color}`}
    >
      {icon}
    </div>
  )
}