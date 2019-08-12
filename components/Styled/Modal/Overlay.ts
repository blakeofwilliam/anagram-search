import styled from '@emotion/styled'
import { rgba } from 'polished'

import { dark } from '../../../lib/variables'

const Overlay = styled.div`
  background: ${rgba(dark, 0.9)};
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
`

export default Overlay
