import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as AstrazenecaLogo } from '@images/logos/astrazeneca.svg';
import { ReactComponent as BarclaysLogo } from '@images/logos/barclays-wide.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as DHLLogo } from '@images/logos/dhl.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as PrimarkLogo } from '@images/logos/primark.svg';

const LOGOS = [
  {
    logo: AirbnbLogo,
    link: 'https://airbnb.io',
  },
  {
    logo: AstrazenecaLogo,
    link: 'https://astrazeneca.com',
  },
  {
    logo: AppleMusicLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: BarclaysLogo,
    link: 'https://barclays.com',
  },
  {
    logo: CokeLogo,
    link: 'https://coca-cola.com',
  },
  {
    logo: DHLLogo,
    link: 'https://dhl.com',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: NikeLogo,
    link: 'https://nike.com',
  },
  {
    logo: InstagramLogo,
    link: 'https://instagram.com',
  },
  {
    logo: PrimarkLogo,
    link: 'https://primark.com',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <StyledContainer>
          <div>
            <h1>I've worked with</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink key={link} href={link}>
                  {logo()}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
