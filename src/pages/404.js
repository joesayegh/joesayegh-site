import React from 'react';
// import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Footer from '@sections/Footer';

import { Section, Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Navbar />
    <Section style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
    <Footer />
  </Layout>
);

export default NotFoundPage;
