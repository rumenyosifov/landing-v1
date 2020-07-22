import Head from 'next/head';
import Layout from '../components/layout/layout';
import Main from '../components/main/main';
import Services from '../components/services/services';
import About from '../components/about/about';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pensieve | Brittany Chiang</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <>
          <Main />
          <Services />
          <About />
        </>
      </Layout>
    </>
  );
}
