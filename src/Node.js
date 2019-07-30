class Node {
  constructor() {
    this.keys = new Map()
    this.end = false

    this.isEnd = this.isEnd.bind(this)
    this.setEnd = this.setEnd.bind(this)
  }
  
  isEnd () {
    return this.end
  }

  setEnd () {
		this.end = true
  }
}

export default Node
