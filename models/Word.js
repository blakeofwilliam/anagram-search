const mongoose = require('mongoose')

const WordSchema = mongoose.Schema({
  length: Number,
  letters: {
    a: Number,
    b: Number,
    c: Number,
    d: Number,
    e: Number,
    f: Number,
    g: Number,
    h: Number,
    i: Number,
    j: Number,
    k: Number,
    l: Number,
    m: Number,
    n: Number,
    o: Number,
    p: Number,
    q: Number,
    r: Number,
    s: Number,
    t: Number,
    u: Number,
    v: Number,
    w: Number,
    x: Number,
    y: Number,
    z: Number
  },
  word: String
})

const Word = mongoose.model('Word', WordSchema);

module.exports = Word