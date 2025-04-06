export const ParseConfig=(configStr: string)=>{
  try {
    const parsedConfig = JSON.parse(configStr)
    
    const theme = parsedConfig.theme || 'light'
    const hidenAccountsId = parsedConfig.hidenAccountsId || []

    return { theme, hidenAccountsId }
  } catch (error) {
    console.error('Ошибка при парсинге JSON:', error, configStr)
    return { theme: 'light', hidenAccountsId: [] }
  }
}