import '../styles/globals.css';
import Header from '../../src/components/Layout/Header';
// import Footer from '../src/components/Layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
