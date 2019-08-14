import * as React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import Search from '../components/Search'

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <Head>
      <title>Anagram Search | Find words</title>
    </Head>
    <Search />
  </Layout>
)

export default IndexPage
