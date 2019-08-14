const loadDb = require('../lib/db')
const { getLetters } = require('../lib/words')
const Word = require('../models/Word')

module.exports = async (req, res) => {
  await loadDb()
  const { method } = req

  switch(method) {
    case 'GET':
      try {
        const words = await Word.find()
        res.send(words)
      } catch(e) {
        res.status(500).send(e)
      }
      break
    case 'POST':
      const { 
        word: requestWord, 
        words: requestWords = [] 
      } = req.body

      if (requestWords.length > 0) {
        const words = requestWords.map(word => ({
          length: word.length,
          letters: getLetters(word.toLowerCase()),
          word: word.toLowerCase()
        }))

        try {
          const newWords = await Word.create(words)
          res.send(newWords)
          return
        } catch(e) {
          res.status(500).send(e)
          return
        }
      }

      try {
        const word = requestWord.toLowerCase()
        const newWord = new Word({
          length: word.length,
          letters: getLetters(word),
          word: word
        })
        const createdWord = await newWord.save()

        res.send(createdWord)
      } catch(e) {
        res.status(500).send(e)
      }
      break
    default:
      res.status(401).send('INVALID REQUEST')
      break
  }
}