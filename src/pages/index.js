import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

// import Header from '@sections/Header';
import HeaderNew from '@sections/HeaderNew';
// import About from '@sections/About';
import AboutNew from '@sections/AboutNew';
// import Brands from '@sections/Brands';
import Work from '@sections/Work';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import FooterNew from '@sections/FooterNew';

const IndexPage = () => (
  <Layout>
    <Navbar />
    {/* <Header /> */}
    <HeaderNew />
    {/* <About /> */}
    <AboutNew />
    {/* <Brands /> */}
    <Work />
    <Team />
    <Faq />
    {/* <Footer /> */}
    <FooterNew />
  </Layout>
);

export default IndexPage;
