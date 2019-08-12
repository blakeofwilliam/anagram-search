const express = require('express')
const bodyParser = require('body-parser')

const { getLetters } = require('../../lib/words')
const Word = require('../../models/Word')

const WordsRouter = express.Router()

WordsRouter.use(bodyParser.json())

WordsRouter.route('/')
  .get(async (req, res) => {
    const words = await Word.find()

    res.send(words)
  })
  .post(async (req, res) => {
    const { word } = req.body
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
    const { word } = req.params
    const deletedWord = await Word.find({ word })

    res.send(deletedWord)
  })
  .get(async (req, res) => {
    const { word } = req.params
    const foundWord = await Word.find({ word })

    res.send(foundWord)
  })

module.exports = WordsRouter