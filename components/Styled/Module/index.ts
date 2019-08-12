import styled from '@emotion/styled'

import { ModulePropsType, ColorMapType } from './types'

import {
  $mobileMax
} from '../../../lib/variables'

const colorMap: ColorMapType = {
  light: '#f8f7f5',
  white: 'white'
}

const getModuleBackgroundColor = (props: ModulePropsType) => {
  return props.mode ? colorMap[props.mode] : 'white'
}

const Module = styled.section<ModulePropsType>`
  background-color: ${getModuleBackgroundColor};
  ${p => p.backgroundImage ? `background-image: url(${p.backgroundImage});` : ``}
  ${p => p.backgroundPosition ? `background-position: ${p.backgroundPosition};` : ``}
  background-repeat: no-repeat;
  ${p => p.backgroundSize ? `background-size: ${p.backgroundSize};` : ``}
  padding-bottom: ${p => p.paddingBottom ? p.paddingBottom : `7.5vw`};
  padding-top: ${p => p.paddingTop ? p.paddingTop : `7.5vw`};
  position: relative;
  width: 100vw;

  @media (max-width: ${$mobileMax}) {
    ${p => p.hideBackgroundOnMobile ? `background-image: none;` : ``}
    padding-bottom: ${p => p.paddingBottom ? p.paddingBottom : `20vw`};
    padding-top: ${p => p.paddingTop ? p.paddingTop : `20vw`};
  }
`

Module.defaultProps = {
  hideBackgroundOnMobile: false,
  mode: 'white'
}

export default Module
