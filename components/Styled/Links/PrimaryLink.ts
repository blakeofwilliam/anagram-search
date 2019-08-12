import styled from '@emotion/styled'
import { rgba } from 'polished'

import { dark, primary } from '../../../lib/variables'

const PrimaryLink = styled.a`
  align-items: center;
  background-color: ${primary};
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  min-height: 3.75rem;
  padding: 12.5px 30px;
  text-decoration: none;
  transition: background-color 250ms ease, border-color 150ms ease, color 150ms ease, box-shadow 150ms ease height 150ms ease;

  &:hover {
    background-color: ${dark};
    box-shadow: ${rgba(dark, 0.15)} 0 4px 8px;
  }
`

export default PrimaryLink
