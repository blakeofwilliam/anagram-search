const express = require('express')
const SearchRouter = require('./search')
const WordsRouter = require('./words')

const ApiRouter = express.Router()

ApiRouter.use('/search', SearchRouter)
ApiRouter.use('/words', WordsRouter)

module.exports = ApiRouter