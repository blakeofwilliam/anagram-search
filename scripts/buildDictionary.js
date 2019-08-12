require('dotenv').config()
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

const Word = require('../models/Word')
const { getLetters } = require('../lib/words')

// Make sure these vars are in your .env file
const { MONGO_HOST, MONGO_PASS, MONGO_USER } = process.env
const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/dictionary?retryWrites=true&w=majority`
mongoose.connect(connectionString, { useNewUrlParser: true })

fs.readFile(path.resolve(__dirname, '../words.txt'), async (err, data) => {
  if (err) {
    throw err
  }

  // Trim the list down to only include 3-letter+ words
  // and make everything lowercase
  const wordList = data
    .toString()
    .split('\n')
    .map(w => w.toLowerCase())
    .filter(w => w.length > 2)

  // This takes longer, but prevents the script
  // from making too many parallel requests to the db
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i]
    const existingWord = await Word.findOne({ word })

    if (!existingWord) {
      try {
        await Word.create({
          length: word.length,
          letters: getLetters(word),
          word
        })
        console.log(`Added entry for "${word}"...`)
      } catch(e) {
        console.error(`Could not add entry for "${word}..."`)
      }
    } else {
      console.log(`Skipping ${word}; already in database...`)
    }
  }
})