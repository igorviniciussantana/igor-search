import Head from 'next/head'
import { Title, Input } from '@components/imports'


export default function Home() {
  return (
    <>
      <Head>
        <title>Igor Search | Pesquisar</title>
        <meta name="description" content="Webpage personalizada para buscas no Google." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
   <Title />
   <Input />
      </main>
    </>
  )
}
