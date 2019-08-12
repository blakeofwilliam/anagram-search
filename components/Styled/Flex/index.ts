import styled from '@emotion/styled'
import { FlexPropsInterface } from './types'

const Flex = styled.div<FlexPropsInterface>`
  display: flex;

  ${
    p => p.wrap 
    ? `flex-wrap: ${p.wrap};`
    : ``
  }
`

export default Flex
