/* eslint-disable react/jsx-props-no-spreading */
import '../styles.scss';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import Services from '../components/services/services';
import WhereWeAre from '../components/whereWeAre/whereWeAre';
import HowWeWork from '../components/howWeWork/howWeWork';
// import About from '../components/about/about';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} key={router.route} />
        <Services />
        <WhereWeAre />
        <HowWeWork />
        {/* <About /> */}
        <Footer />
      </Layout>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({ route: PropTypes.string.isRequired }).isRequired,
};

export default MyApp;
