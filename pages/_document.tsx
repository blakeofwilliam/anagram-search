import Document, { Html, Head, Main, NextScript } from 'next/document'

import Body from '../components/Styled/Body'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>

        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument