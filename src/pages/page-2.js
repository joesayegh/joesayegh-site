import React from 'react';
// import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Test from '@sections/Test';
import Footer from '@sections/Footer';

const SecondPage = () => (
  <Layout>
    <Navbar />
    <Test />
    <Footer />
  </Layout>
);

export default SecondPage;
