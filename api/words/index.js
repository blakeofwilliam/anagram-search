const express = require('express')
const bodyParser = require('body-parser')

const { getLetters } = require('../../lib/words')
const Word = require('../../models/Word')

const WordsRouter = express.Router()

WordsRouter.use(bodyParser.json())

WordsRouter.route('/')
  .get(async (req, res) => {
    try {
      const words = await Word.find()
      res.send(words)
    } catch(e) {
      res.status(500).send(e)
    }
  })
  .post(async (req, res) => {
    const { word: requestWord } = req.body
    const word = requestWord.toLowerCase()

    let newWord = new Word({
      length: word.length,
      letters: getLetters(word),
      word: word
    })

    try {
      newWord = await newWord.save()
      res.send(newWord)
    } catch(e) {
      res.status(500).send(e)
    }
  })

WordsRouter.route('/:word')
  .delete(async (req, res) => {
    const { word: requestWord } = req.params
    const word = requestWord.toLowerCase()

    try {
      const deletedWord = await Word.deleteOne({ word })
      res.send(deletedWord)
    } catch(e) {
      res.status(500).send(e)
    }
  })
  .get(async (req, res) => {
    const { word: requestWord } = req.params
    const word = requestWord.toLowerCase()

    try {
      const foundWord = await Word.findOne({ word })
      res.send(foundWord)
    } catch(e) {
      res.status(500).send(e)
    }
  })

module.exports = WordsRouter