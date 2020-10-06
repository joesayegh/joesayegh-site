import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Test = () => (
  <Section style={{ background: 'var(--bg)', color: 'var(--text)' }}>
    <Container>
      <Title>
        <h1>Test</h1>
      </Title>
      <Text>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            consequatur sequi, provident possimus impedit accusamus aperiam ex
            esse ducimus autem quidem! Libero quae, voluptatem quod voluptatibus
            modi alias deserunt excepturi!
          </p>
        </div>
      </Text>
    </Container>
  </Section>
);

const Title = styled.div`
  h1 {
    font-size: 1.4rem;
    line-height: 1.3;
    margin-bottom: 40px;

    @media (min-width: ${props => props.theme.screen.iphone}) {
      font-size: 1.6rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: 2.4rem;
    }
  }
`;

const Text = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.4;

    @media (min-width: ${props => props.theme.screen.iphone}) {
      font-size: 1rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: 1.3rem;
    }
  }
`;

export default Test;
