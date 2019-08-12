import styled from '@emotion/styled'

import { ContainerPropsType } from './types'
import { 
  $lgDesktopMin, 
  $lgDesktopContainer, 
  $mdDesktopContainer, 
  $mdDesktopMin,
  $tabletMax
} from '../../../lib/variables'

const Container = styled.div<ContainerPropsType>`
  ${p => p.backgroundImage ? `background-image: url(${p.backgroundImage});` : ``}
  ${p => p.backgroundPosition ? `background-position: ${p.backgroundPosition};` : ``}
  background-repeat: no-repeat;
  ${p => p.backgroundSize ? `background-size: ${p.backgroundSize};` : ``}
  margin: auto;
  max-width: 100%;
  padding: 0 30px;
  padding-bottom: ${p => p.paddingBottom ? p.paddingBottom : `0`};
  padding-top: ${p => p.paddingTop ? p.paddingTop : `0`};
  position: relative;

  @media (max-width: ${$lgDesktopMin}) {
    width: ${$lgDesktopContainer};
  }

  @media (max-width: ${$mdDesktopMin}) {
    width: ${$mdDesktopContainer};
  }

  @media (max-width: ${$tabletMax}) {
    width: 100%;
  }
`

export default Container
