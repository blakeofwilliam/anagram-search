const loadDb = require('../../lib/db')
const { getLettersQuery } = require('../../lib/words')
const Words = require('../../models/Word')

module.exports = async (req, res) => {
  await loadDb()

  const { tiles: requestTiles } = req.query
  const tiles = requestTiles.toLowerCase()
  const query = getLettersQuery(tiles)

  try {
    const words = await Words.find(query)
    res.json(words.map(w => w.word))
  } catch(e) {
    res.status(500).send(e)
  }
}
