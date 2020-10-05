import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              © 2013-{new Date().getFullYear()} / Copyright Joe Sayegh. All
              Rights reserved.
              <br />
              <br />
              <span>
                This site is built with {` `}
                <ExternalLink href="https://www.gatsbyjs.org">
                  Gatsby
                </ExternalLink>
                {` `} and hosted on {` `}
                <ExternalLink href="https://www.netlify.com">
                  Netlify
                </ExternalLink>
                . {` `} The source code is hosted on {` `}
                <ExternalLink href="https://www.github.com">
                  Github
                </ExternalLink>
                .
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
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  // img {
  //   margin: 0 8px;
  //   width: 24px;
  //   height: 24px;
  // }

  object {
    margin: 0 8px;
    width: 24px;
    height: 24px;
    pointer-events: none;
    transition: all 0.3s;

    // &:hover,
    // &:focus {
    //   filter: invert(50%);
    // }

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
  // background-color: ${props => props.theme.color.black.luxury};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  // ${props => props.theme.font_size.small};
  color: var(--text);
  // color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    font-size: 10px;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
