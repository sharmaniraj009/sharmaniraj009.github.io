import '../styles/globals.css';
import Head from 'next/head';
import MatrixBackground from '../components/MatrixBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cyber Sentinel | Security Portfolio</title>
        <meta name="description" content="Cybersecurity Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MatrixBackground />
      <div className="min-h-screen bg-transparent">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;