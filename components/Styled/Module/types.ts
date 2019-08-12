type AllowedModuleStyles = 'light' | 'white'

export type ColorMapType = {
  [key in AllowedModuleStyles]: string
}

export type ModulePropsType = {
  backgroundImage?: string
  backgroundPosition?: string
  backgroundSize?: string
  hideBackgroundOnMobile?: boolean
  paddingBottom?: string
  paddingTop?: string
  mode?: AllowedModuleStyles
}
