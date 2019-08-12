const express = require('express')

const Words = require('../../models/Word')
const { getLettersQuery } = require('../../lib/words')

const SearchRouter = express.Router()

SearchRouter.get('/', async (req, res) => {
  const words = await Words.find()

  res.send(words)
})

SearchRouter.get('/:tiles', async (req, res) => {
  const { tiles } = req.params
  const query = getLettersQuery(tiles)
  const words = await Words.find(query)

  res.send(words.map(w => w.word))
})

module.exports = SearchRouter
