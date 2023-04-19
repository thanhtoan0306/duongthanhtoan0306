import Head from 'next/head'
import HomeContent from '@/container/HomeContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Duong Thanh Toan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <HomeContent/>
      </main>
    </>
  )
}
