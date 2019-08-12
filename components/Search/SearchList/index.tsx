import * as React from 'react'

import {
  SearchResult,
  SearchResults,
  WordWrapper
} from './style'
import { SearchListPropsInterface } from './types'

import Card from '../../Styled/Card'
import Container from '../../Styled/Container'
import Module from '../../Styled/Module'

const SearchList: React.FunctionComponent<SearchListPropsInterface> = ({
  onDelete,
  words
}) => (
  <Module>
      <Container>
        <SearchResults>
          <h4>Found { words.length } word{words.length === 1 ? `` : `s`}</h4>
          {
            words.map((word:string) => (
              <SearchResult key={word}>
                <Card>
                  <WordWrapper>
                    {word}
                    <button 
                      onClick={e => {
                        e.preventDefault()
                        onDelete(word)
                      }}
                    >
                      Delete
                    </button>
                  </WordWrapper>
                </Card>
              </SearchResult>
            ))
          }
        </SearchResults>
      </Container>
    </Module>
)

SearchList.defaultProps = {
  onDelete: () => {}
}

export default SearchList
