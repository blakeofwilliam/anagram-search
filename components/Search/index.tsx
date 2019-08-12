import * as React from 'react'
import axios from 'axios'

import { 
  Heading,
  SearchButton,
  SearchForm,
  SearchInput, 
  SearchResult,
  SearchResults
} from './style'

import Card from '../Styled/Card'
import Container from '../Styled/Container'
import Flex from '../Styled/Flex'
import Module from '../Styled/Module'

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
        <Module>
          <Container>
            {
              words.length > 0 && (
                <SearchResults>
                  {
                    words.map((word:string) => (
                      <SearchResult key={word}>
                        <Card>
                          {word}
                          <button 
                            onClick={e => {
                              e.preventDefault()
                              this.handleDelete(word)
                            }}
                          >
                            Delete
                          </button>
                        </Card>
                      </SearchResult>
                    ))
                  }
                </SearchResults>
              )
            }
          </Container>
        </Module>
      </React.Fragment>
    )
  }
}

export default Search
