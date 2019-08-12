import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import { ModalPropsType } from './types'

import {
  $mobileMax,
  $tabletMax,
  $smDesktopMin
} from '../../../lib/variables'

const modalAnimationKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Modal = styled.div<ModalPropsType>`
  animation: ${modalAnimationKeyframes} 500ms;
  background: white;
  left: 20vw;
  max-height: 80vh;
  ${p => p.fluid ? `` : `padding: 2.5vw;`}
  overflow-y: scroll;
  position: fixed;
  right: 20vw;
  top: 10vh;
  width: 60vw;
  will-change: transform;
  z-index: 11;

  // Scrolling hack :/
  -webkit-backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translateZ(0);

  @media (max-width: ${$smDesktopMin}) {
    left: 10vw;
    right: 10vw;
    width: 80vw;
  }

  @media (max-width: ${$tabletMax}) {
    bottom: 5vh;
    left: 5vw;
    max-height: 90vh;
    right: 5vw;
    top: 5vh;
    width: 90vw;
  }

  @media (max-width: ${$mobileMax}) {
    bottom: 0;
    height: 100vh;
    max-height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    width: 100vw;
  }
`

export default Modal
