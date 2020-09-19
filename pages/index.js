import React from 'react'
import Head from 'next/head'
import '@style/globals.scss'
import NavBar from '@components/navBar'
import { Button } from 'antd'
const colorCluters = ['red', 'blue', 'green']
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <NavBar />
    </div>
  </>
)

export default Home
