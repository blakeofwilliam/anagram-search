const loadDb = require('../../lib/db')
const Words = require('../../models/Word')

module.exports = async (req, res) => {
  await loadDb()

  if (req.method === 'GET') {
    const { word: requestWord } = req.query
    const word = requestWord.toLowerCase()

    try {
      const foundWord = await Words.findOne({ word })
      return res.send(foundWord)
    } catch(e) {
      return res.status(500).send(e)
    }
  } else if (req.method === 'DELETE') {
    const { word: requestWord } = req.query
    const word = requestWord.toLowerCase()

    try {
      const deletedWord = await Words.deleteOne({ word })
      return res.send(deletedWord)
    } catch(e) {
      return res.status(500).send(e)
    }
  } else {
    return res.status(401).send('INVALID REQUEST')
  }
}