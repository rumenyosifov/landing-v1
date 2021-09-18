import Head from 'next/head';
import Main from '../components/main/main';
import Services from '../components/services/services';
import About from '../components/about/about';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cerrajeros en Barcelona</title>
      </Head>
      <Main />
      <Services />
      <About />
    </>
  );
}
