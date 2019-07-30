import Trie from './src/Trie'

const dictionary = new Trie()
const words = [
  'he',
  'health',
  'healthy',
  'hearty',
  'hell',
  'help',
  'hello'
]

words.forEach(w => {
  dictionary.add(w)
})

const isWord = dictionary.isWord('he')

console.log(isWord)