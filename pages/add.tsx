import * as React from 'react'
import Head from 'next/Head'

import Add from '../components/Add'
import Layout from '../components/Layout'

const AddPage: React.FunctionComponent = () => (
  <Layout>
    <Head>
      <title>Anagram Search | Add words</title>
    </Head>
    <Add />
  </Layout>
)

export default AddPage
