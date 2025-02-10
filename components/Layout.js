import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-300">
      <Head>
        <title>Cyber Sentinel | Security Portfolio</title>
        <meta name="description" content="Cybersecurity Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;