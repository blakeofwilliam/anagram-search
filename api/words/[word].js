
const loadDb = require('../../lib/db')

module.exports = async (req, res) => {
  const db = await loadDb()
  const collection = await db.collection('words')

  if (req.method === 'GET') {
    const { word: requestWord } = req.query
    const word = requestWord.toLowerCase()

    try {
      const foundWord = await collection.findOne({ word })
      res.send(foundWord)
    } catch(e) {
      res.status(500).send(e)
    }
  } else if (req.method === 'DELETE') {
    const { word: requestWord } = req.query
    const word = requestWord.toLowerCase()

    try {
      const deletedWord = await collection.deleteOne({ word })
      res.send(deletedWord)
    } catch(e) {
      res.status(500).send(e)
    }
  } else {
    res.status(401).send('INVALID REQUEST')
  }
}