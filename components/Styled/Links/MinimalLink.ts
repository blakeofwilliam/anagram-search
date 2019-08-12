
import styled from '@emotion/styled'

import { primary, secondary } from '../../../lib/variables'

const MinimalLink = styled.a`
  color: ${primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${secondary};
  }
`

export default MinimalLink
