import Node from './Node'

class Trie {
  constructor() {
    this.root = new Node()

    this.add = this.add.bind(this)
    this.isWord = this.isWord.bind(this)
  }

	add (input, node = this.root) {
    // Ensure that there's a valid string being passed
		if (input.length == 0) {
      node.setEnd()
			return
    }

    // Pop off the first letter of the strinf
    const root = input[0]
    
    // Check if a node of this letter
    // and at this position already exists
    if (!node.keys.has(root)) {
      // If not, create one
      node.keys.set(input[0], new Node())
      
      // Add the remainder of the string to the new node
			return this.add(input.substr(1), node.keys.get(root))
    } 
    
    // If a node already exists, add the remainder of the string to it
    return this.add(input.substr(1), node.keys.get(root))
	}

	isWord (word) {
    // Start with the root node
    let node = this.root
    
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
        // If no node with the first letter exists
        // just stop the check
				return false
      } 
      
      // Get the first letter's node
      node = node.keys.get(word[0])
      // Pop off the remainder of the word
      word = word.substr(1)
    }
    
    // Check if the remainder of the word exists in the node
    // and that it's the end of the branch
		return node.keys.has(word) && node.keys.get(word).isEnd()
	}
}

export default Trie
