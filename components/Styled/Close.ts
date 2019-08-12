import styled from '@emotion/styled'

import { $tabletMax } from '../../lib/variables'

const Close = styled.div`
  background-image: url(//images.ctfassets.net/9u2t3ap6pctb/2SZAjn70NP7BhsXiDMMsOf/97297f516e4870c3138bf7ffc9f6275e/synapse-x.svg);
  background-size: contain;
  cursor: pointer;
  height: 2rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 2rem;

  @media (max-width: ${$tabletMax}) {
    right: 1rem;
    top: 1rem;
  }
`

export default Close
