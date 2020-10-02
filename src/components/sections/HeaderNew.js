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
          I create bespoke websites that are fully customisable.
          <br />
          I code in a range of languages including HTML, CSS, SCSS, JavaScript
          and PHP. <br />I enjoy working with WordPress, React and Gatsby.
        </p>
      </Text>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: var(--bg);
  // background-color: ${props => props.theme.color.black.luxury};
  font-family: ${props => props.theme.font.primary};
  padding: 300px 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 150px 0;
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }

  h1 {
    color: var(--text);
    // color: ${props => props.theme.color.white.dark};
    // color: ${props => props.theme.color.white.regular};
  }

  span {
    color: var(--accent);
  }

  p {
    color: var(--text);
    // color: ${props => props.theme.color.white.dark};
  }
`;

export default Header;
