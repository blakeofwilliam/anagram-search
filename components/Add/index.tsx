import * as React from 'react'
import axios from 'axios'

import { 
  AddButton,
  Textarea 
} from './style'

import Container from '../Styled/Container'
import Flex from '../Styled/Flex'
import Module from '../Styled/Module'

class Add extends React.Component {
  state = {
    wordList: ''
  };

  handleSubmit = async (e: any) => {
    e.preventDefault()
    const { wordList } = this.state
    const words = wordList.split('\n').filter(w => w.length > 0)

    await axios.post(`/api/words`, {
      words
    })
    this.setState({
      wordList: ''
    })
  };

  render() {
    const { wordList } = this.state

    return (
      <Module>
        <Container>
          <h1>Add words</h1>
          <form onSubmit={ this.handleSubmit }>
            <Flex wrap="wrap">
              <Textarea 
                onChange={e => this.setState({ wordList: e.target.value })}
                value={wordList}
              />
              <AddButton>Add words</AddButton>
            </Flex>
          </form>
        </Container>
      </Module>
    )
  }
}

export default Add
