import React from 'react';
// import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import About from '@sections/About';
import Footer from '@sections/Footer';

const SecondPage = () => (
  <Layout>
    <Navbar />
    <About />
    <Footer />
  </Layout>
);

export default SecondPage;
