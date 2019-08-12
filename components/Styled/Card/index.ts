import styled from '@emotion/styled'
import { rgba } from 'polished'

import { CardPropsType } from './types'

import { dark } from '../../../lib/variables'

const Card = styled.div<CardPropsType>`
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px ${rgba(dark, 0.1)};
  padding: 30px;
  transition: box-shadow 250ms, transform 250ms;

  ${
    p => !p.hasLink ? `` : `
      cursor: pointer;

      &:hover {
        box-shadow: 0 4px 8px ${rgba(dark, 0.2)};
        transform: translateY(-5px);
      }
    `
  }
`

Card.defaultProps = {
  hasLink: false
}

export default Card
