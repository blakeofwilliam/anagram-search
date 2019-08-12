import styled from '@emotion/styled'
import { rgba } from 'polished'

import { dark } from '../../../lib/variables'

const SecondaryLink = styled.a`
  align-items: center;
  background-color: transparent;
  border: solid 1px ${rgba(dark, 0.1)};
  color: ${dark};
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  min-height: 3.75rem;
  padding: 12.5px 30px;
  text-decoration: none;
  transition: background-color 250ms, box-shadow 350ms;

  &:hover {
    background-color: white;
    box-shadow: 0 4px 8px ${rgba(dark, 0.25)};
  }
`

export default SecondaryLink
