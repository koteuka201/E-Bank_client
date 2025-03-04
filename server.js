import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/Core/user/accounts', (req, res) => {
  const db = router.db
  const accounts = db.get('accounts').value()
  res.json(accounts)
})

server.use(router)

server.listen(3000, () => {
  console.log('server running')
})
