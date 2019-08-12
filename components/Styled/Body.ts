import styled from '@emotion/styled'

import { dark, segmentNeutral } from '../../lib/variables'

const Body = styled.body`
  color: ${segmentNeutral};
  font-family: SGMT PostGrotesk, sans-serif;
  font-size: 18px;
  line-height 1.5;
  margin: 0;

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5 {
    color: ${dark};
    font-weight: 500;
    line-height: 1.1;
  }

  h1, h2 {
    font-size: 2rem;
  }

  h3, h4 {
    font-size: 1.75rem;
  }

  h3 {
    font-family: GT Cinetype, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.75rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  /* GT Cinetype */
  @font-face {
    font-family: 'GT Cinetype';
    font-display: swap;
    src:  local('GT Cinetype Mono'),
          local('GT-Cinetype-Mono'),
          url('/static/fonts/GT-Cinetype/GT-Cinetype-Mono.woff2') format('woff2'),
          url('/static/fonts/GT-Cinetype/GT-Cinetype-Mono.woff') format('woff');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'GT Cinetype';
    font-display: swap;
    src:  local('GT Cinetype Bold'),
          local('GT-Cinetype-Bold'),
          url('/static/fonts/GT-Cinetype/GT-Cinetype-Bold.woff2') format('woff2'),
          url('/static/fonts/GT-Cinetype/GT-Cinetype-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 600;
  }

  /* SGMT-PostGrotesk */
  @font-face {
    font-family: 'SGMT PostGrotesk';
    font-display: swap;
    src:  local('SGMT PostGrotesk Book'),
          local('SGMT-PostGrotesk-Book'),
          url('/static/fonts/SGMT-PostGrotesk/SGMT-PostGrotesk-Book.woff2') format('woff2'),
          url('/static/fonts/SGMT-PostGrotesk/SGMT-PostGrotesk-Book.woff') format('woff');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'SGMT PostGrotesk';
    font-display: swap;
    src:  local('SGMT PostGrotesk Medium'),
          local('SGMT-PostGrotesk-Medium'),
          url('/static/fonts/SGMT-PostGrotesk/SGMT-PostGrotesk-Medium.woff2') format('woff2'),
          url('/static/fonts/SGMT-PostGrotesk/SGMT-PostGrotesk-Medium.woff') format('woff');
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'SGMT PostGrotesk';
    font-display: swap;
    src:  local('SGMT PostGrotesk Bold'),
          local('SGMT-PostGrotesk-Bold'),
          url('/static/fonts/SGMT-PostGrotesk/SGMT-PostGrotesk-Bold.woff2') format('woff2'),
          url('/static/fonts/SGMT-PostGrotesk/SGMT-PostGrotesk-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 600;
  }

  // Fixes a bad tracking pixel
  img[src*="trkn.us"] {
    display: none;
    position: absolute;
    visibility: hidden;
  }
`

export default Body
