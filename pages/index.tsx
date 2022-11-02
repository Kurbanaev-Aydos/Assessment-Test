import type { NextPage } from 'next'
import Head from 'next/head'
import { Main } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post Management App</title>
        <meta name='description' content='Post Management App' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <div className='bg-[#F5F5F5] flex items-center justify-center h-full w-full px-5 py-4'>
        <Main />
      </div>
    </>
  )
}

export default Home
