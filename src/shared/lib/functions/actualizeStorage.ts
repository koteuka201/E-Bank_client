export const ActualizeStorage=()=>{
  //{}=useGetUser(localStorage.getItem('token'))
  const userData=true
  const isError=false
  const isLoading=false

  if((userData==undefined || isError) && isLoading===false) localStorage.removeItem('token')
}