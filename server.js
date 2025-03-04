import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/Core/user/accounts', (req, res) => {
  const db = router.db
  const accounts = db.get('accounts').value()

  const { userId } = req.query

  if (userId) {
    const filteredAccounts = accounts.find(acc => acc.id === userId)
    if (filteredAccounts) return res.json(filteredAccounts)
    else return res.status(404).json({ error: 'Account not found' })
  }

  res.json(accounts)
})

server.use(router)

server.listen(3000, () => {
  console.log('server running')
})
