import * as React from 'react'
import axios from 'axios'

import { 
  SearchInput 
} from './style'

class Search extends React.Component {
  state = {
    tiles: '',
    words: []
  }

  handleSubmit = async (e:any) => {
    e.preventDefault()
    const { tiles } = this.state
    const res = await axios.get(`/api/search/${tiles}`)
    
    this.setState({
      words: res.data
    })
  };

  render() {
    const { tiles, words } = this.state

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <SearchInput 
            onChange={e=>this.setState({ tiles: e.target.value })} 
            value={tiles} />
          <button>Find words</button>
        </form>
        {
          words.length > 0 && (
            <ul>
              {
                words.map((word:string) => (
                  <li key={word}>{word}</li>
                ))
              }
            </ul>
          )
        }
      </React.Fragment>
    )
  }
}

export default Search
