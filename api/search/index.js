const express = require('express')

const Words = require('../../models/Word')
const { getLettersQuery } = require('../../lib/words')

const SearchRouter = express.Router()

SearchRouter.get('/', async (req, res) => {
  res.status(401).send(`
    <h1>No word provided</h1>
    <p>
      You must provide a word in your request. For example: <a href="/api/search/hello">/api/search/hello</a>
    </p>
  `)
})

SearchRouter.get('/:tiles', async (req, res) => {
  const { tiles: requestTiles } = req.params
  const tiles = requestTiles.toLowerCase()
  const query = getLettersQuery(tiles)

  try {
    const words = await Words.find(query)
    res.send(words.map(w => w.word))
  } catch(e) {
    res.status(500).send(e)
  }
})

module.exports = SearchRouter
