import styled from '@emotion/styled'
import { rgba } from 'polished'

import { TagPropsType } from './types'

const Tag = styled.span<TagPropsType>`
  background-color: ${p => `${rgba(p.color, 0.15)}`};
  color: ${p => p.color};
  display: flex;
  font-size: 0.875rem;
  font-weight: bold;
  justify-content: center;
  margin: auto;
  padding: 7.5px 15px;
  text-transform: uppercase;
  max-width: 120px;
`

export default Tag
