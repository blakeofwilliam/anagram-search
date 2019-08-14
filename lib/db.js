const mongoose = require('mongoose')

let connection = null

const loadDb = () => {
  if (connection) {
    return connection
  }

  const { MONGO_HOST, MONGO_PASS, MONGO_USER } = process.env
  const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/dictionary?retryWrites=true&w=majority`

  connection = mongoose.connect(connectionString, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true
  })

  return connection
}

module.exports = loadDb
