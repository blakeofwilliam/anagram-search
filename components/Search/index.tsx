import * as React from 'react'
import axios from 'axios'

import { 
  Heading,
  SearchButton,
  SearchForm,
  SearchInput, 
} from './style'

import Container from '../Styled/Container'
import Flex from '../Styled/Flex'
import Module from '../Styled/Module'
import SearchList from './SearchList'

class Search extends React.Component {
  state = {
    tiles: '',
    words: []
  }

  handleDelete = async (word:string) => {
    const { words } = this.state
    await axios.delete(`/api/words/${word}`)
    
    this.setState({
      words: words.filter(w => w !== word)
    })
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
        <Module mode="light">
          <Container>
            <Flex wrap="wrap">
              <Heading>Search by Tiles</Heading>
              <SearchForm onSubmit={this.handleSubmit}>
                <div>
                  <SearchInput 
                    onChange={e => this.setState({ tiles: e.target.value })} 
                    value={tiles} />
                  <SearchButton>Find words</SearchButton>
                </div>
              </SearchForm>
            </Flex>
          </Container>
        </Module>
        
        {
          words.length > 0 && 
          <SearchList onDelete={this.handleDelete} words={words} />
        }
      </React.Fragment>
    )
  }
}

export default Search
