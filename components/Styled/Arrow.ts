import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

const breatheKeyframes = keyframes`
  0% {
    transform: scale(1);
  }

  65% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
`

const Arrow = styled.img`
  animation: ${breatheKeyframes} 4s infinite;
  cursor: pointer;
`

export default Arrow
