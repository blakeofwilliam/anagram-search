const loadDb = require('../lib/db')
const { getLetters } = require('../lib/words')
const Word = require('../models/Word')

module.exports = async (req, res) => {
  await loadDb()
  
  if (req.method === 'GET') {
    try {
      const words = await Word.find()
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
        const newWords = await Word.create(words)
        res.send(newWords)
        return
      } catch(e) {
        res.status(500).send(e)
        return
      }
    }

    const word = requestWord.toLowerCase()

    try {
      const wordProps = new Word({
        length: word.length,
        letters: getLetters(word),
        word: word
      })
      const createdWord = await word.save(wordProps)

      res.send(createdWord)
    } catch(e) {
      res.status(500).send(e)
    }
  }
}