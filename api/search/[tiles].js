const loadDb = require('../../lib/db')
const { getLettersQuery } = require('../../lib/words')

module.exports = async (req, res) => {
  const db = await loadDb()

  const { tiles: requestTiles } = req.query
  const tiles = requestTiles.toLowerCase()
  const query = getLettersQuery(tiles)

  try {
    const collection = await db.collection('words')
    const words = await collection.find(query).toArray()
    res.json(words.map(w => w.word))
  } catch(e) {
    res.status(500).send(e)
  }
}
