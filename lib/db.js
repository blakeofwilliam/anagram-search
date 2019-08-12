const mongoose = require('mongoose')

const loadDb = () => {
  const { MONGO_HOST, MONGO_PASS, MONGO_USER } = process.env
  const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/anagramsearch?retryWrites=true&w=majority`
  return mongoose.connect(connectionString, {useNewUrlParser: true})
}

module.exports = loadDb

