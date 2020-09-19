import React from 'react'
import Head from 'next/head'
// import '@style/globals.less'
import NavBar from '@components/navBar'
import 'antd/lib/style/themes/default.less'
import 'antd/dist/antd.less' // 引入官方提供的 less 样式入口文件
import '@style/theme.less' // 用于覆盖上面定义的变量
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
