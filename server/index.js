const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line
  console.log('Listening on port', port)
})
