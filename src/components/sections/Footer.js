import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/joesayegh',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/joesayegh/',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/joe_sayegh',
  },
];

const Footer = () => (
  <FooterWrapper>
    <StyledContainer>
      <Copyright>
        © 2013-{new Date().getFullYear()} / Copyright Joe Sayegh. All Rights
        reserved.
        <br />
        <br />
        <span>
          This site is built with {` `}
          <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
          {` `} and hosted on {` `}
          <ExternalLink href="https://www.netlify.com">
            Netlify
          </ExternalLink>. <br />
          {` `} The source code is hosted on {` `}
          <ExternalLink href="https://www.github.com">Github</ExternalLink>.
        </span>
      </Copyright>
      <SocialIcons>
        {SOCIAL.map(({ icon, link }) => (
          <ExternalLink key={link} href={link}>
            <object
              type="image/svg+xml"
              data={icon}
              alt="link"
              aria-label="link"
            />
          </ExternalLink>
        ))}
      </SocialIcons>
    </StyledContainer>
  </FooterWrapper>
);

const SocialIcons = styled.div`
  display: flex;

  object {
    margin: 0 8px;
    width: 24px;
    height: 24px;
    pointer-events: none;
    transition: all 0.3s;

    @media (prefers-color-scheme: dark) {
      filter: invert(100%);
    }
  }

  margin-top: 40px;

  @media (min-width: ${props => props.theme.screen.sm}) {
    margin-top: 0;
  }
`;

const FooterWrapper = styled.footer`
  background-color: var(--bg);
  padding: 32px 0;
`;

const Copyright = styled.div`
  color: var(--text);
  font-size: 0.6rem;

  @media (min-width: ${props => props.theme.screen.iphone}) {
    font-size: 0.7rem;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    font-size: 0.8rem;
  }

  a {
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${props => props.theme.screen.sm}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export default Footer;
