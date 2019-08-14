const loadDb = require('../lib/db')

const { getLetters } = require('../lib/words')

module.exports = async (req, res) => {
  const db = await loadDb()
  const collection = db.collection('words')

  if (req.method === 'GET') {
    try {
      const words = await collection.find()
      res.send(words)
    } catch(e) {
      res.status(500).send(e)
    }
  } else if (req.method === 'POST') {
    const { 
      word: requestWord, 
      words: requestWords = [] 
    } = req.body

    if (requestWords.length) {
      const words = requestWords.map(word => ({
        length: word.length,
        letters: getLetters(word),
        word: word
      }))

      try {
        const newWords = await collection.insertMany(words)
        res.send(newWords)
        return
      } catch(e) {
        res.status(500).send(e)
        return
      }
    }

    const word = requestWord.toLowerCase()

    try {
      const newWord = await collection.insertOne({
        length: word.length,
        letters: getLetters(word),
        word: word
      })
      res.send(newWord)
    } catch(e) {
      res.status(500).send(e)
    }
  }
}