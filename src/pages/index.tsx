import Head from "next/head";
import { Title, Input } from "@components/imports";
import { links } from "@data/links";
import CardLink from "@components/CardLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Igor Search | Pesquisar</title>
        <meta
          name="description"
          content="Webpage personalizada para buscas no Google."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Title />
        <Input />

        <nav>
          {links.map((link) => {
            return <CardLink img={link.img} title={link.title} url={link.url}/>;
          })}
        </nav>
      </main>
    </>
  );
}
