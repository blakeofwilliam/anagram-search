const loadDb = require('../../lib/db')
const Words = require('../../models/Word')

module.exports = async (req, res) => {
  await loadDb()
  const { method } = req
  const { word: requestWord } = req.query
  const word = requestWord.toLowerCase()

  switch(method) {
    case 'GET':
      try {
        const foundWord = await Words.findOne({ word })
        return res.send(foundWord)
      } catch(e) {
        return res.status(500).send(e)
      }
      break
    case 'DELETE':
      try {
        const deletedWord = await Words.deleteOne({ word })
        return res.send(deletedWord)
      } catch(e) {
        return res.status(500).send(e)
      }
      break
    default:
      res.status(401).send('INVALID REQUEST')
      break
  }
}