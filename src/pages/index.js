import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
// import HeaderOld from '@sections/HeaderOld';
import About from '@sections/About';
// import AboutOld from '@sections/AboutOld';
// import Brands from '@sections/Brands';
import Work from '@sections/Work';
// import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
// import FooterOld from '@sections/FooterOld';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
