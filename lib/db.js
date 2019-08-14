const MongoClient = require('mongodb').MongoClient

let cachedDb = null

module.exports = async () => {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  const { MONGO_HOST, MONGO_PASS, MONGO_USER } = process.env
  const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/anagramsearch?retryWrites=true&w=majority`

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(connectionString, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db('dictionary')

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}
