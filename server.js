import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/Core/user/accounts/:id', (req, res) => {
  const db = router.db
  const accounts = db.get('accounts').value()

  const { id } = req.params

  if (id) {
    const filteredAccounts = accounts.find(acc => acc.id === id)
    if (filteredAccounts) return res.json(filteredAccounts)
    else return res.status(404).json({ error: 'Account not found' })
  }

  res.json(accounts)
})
server.get('/Core/account/card/:id', (req, res) => {
  const db = router.db
  const { id } = req.params

  const accountDetails = db.get('accountDetails').find({ id }).value()

  if (accountDetails) {
    return res.json(accountDetails)
  } else {
    return res.status(404).json({ error: 'Account details not found' })
  }
})
server.get('/Core/accounts/history', (req, res) => {
  const db = router.db
  const { BankAccountsIds } = req.query

  if (!BankAccountsIds) {
    return res.status(400).json({ error: 'BankAccountsIds query parameter is required' })
  }

  const paymentsHistory = db.get('paymentsHistory').value()
  const filteredHistory = paymentsHistory.filter(payment => payment.bankAccountId === BankAccountsIds)

  res.json(filteredHistory)
})
server.get('/credit/Credit/:id/GetAllCredits', (req, res) => {
  const db = router.db
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'id query parameter is required' })
  }

  const credits = db.get('credits').value()
  const filteredCredits = credits.filter(credit => credit.ownerId === id)

  res.json(filteredCredits)
})
server.get('/credit/Credit/:id/details', (req, res) => {
  const db = router.db
  const { id } = req.params

  const creditDetails = db.get('creditDetails').find({ id }).value()

  if (creditDetails) {
    return res.json(creditDetails)
  } else {
    return res.status(404).json({ error: 'Account details not found' })
  }
})
server.use(router)

server.listen(3000, () => {
  console.log('server running')
})
