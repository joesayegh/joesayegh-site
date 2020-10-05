import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Text>
        <h1>
          Hi! My name is <span>Joe Sayegh</span>. <br />
          I’m a freelance website <br />
          developer from London. <br />
          <br />
        </h1>

        <p>
          I create bespoke websites that are fully customisable. I code in a
          range of languages including HTML, CSS, SCSS, JavaScript and PHP. I
          enjoy working with WordPress, React and Gatsby.
        </p>
      </Text>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: var(--bg);
  font-family: ${props => props.theme.font.primary};
  padding: 300px 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 150px 0;
  }
`;

const Text = styled.div`
  justify-self: start;

  @media (min-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }

  h1 {
    color: var(--text);
    font-size: 1.4rem;
    line-height: 1.3;
    font-weight: 700;

    @media (min-width: ${props => props.theme.screen.iphone}) {
      font-size: 1.6rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: 2.4rem;
    }
  }

  span {
    color: var(--accent);
  }

  p {
    color: var(--text);
    max-width: 550px;
    font-size: 1rem;
    line-height: 1.4;

    @media (min-width: ${props => props.theme.screen.iphone}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      font-size: 1.5rem;
    }

    @media (min-width: ${props => props.theme.screen.md}) {
      max-width: 750px;
    }
  }
`;

export default Header;
