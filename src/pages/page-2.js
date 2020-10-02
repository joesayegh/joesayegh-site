import React from 'react';
// import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import About from '@sections/About';
import FooterNew from '@sections/FooterNew';

const SecondPage = () => (
  <Layout>
    <Navbar />
    <About />
    <FooterNew />
  </Layout>
);

export default SecondPage;
