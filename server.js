const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
require('dotenv').config()
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ApiRouter = require('./api')
    
app.prepare()
.then(() => {
  // Make sure these vars are in your .env file
  const { MONGO_HOST, MONGO_PASS, MONGO_USER } = process.env
  const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/dictionary?retryWrites=true&w=majority`
  mongoose.connect(connectionString, { useNewUrlParser: true })

  const server = express()

  server.use('/api', ApiRouter)
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})