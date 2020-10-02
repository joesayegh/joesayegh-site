import React from 'react';
// import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import About from '@sections/About';
import FooterNew from '@sections/FooterNew';

import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Navbar />
    <About />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
    <FooterNew />
  </Layout>
);

export default NotFoundPage;
