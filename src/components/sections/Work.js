import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import AstrazenecaLogo from '@images/logos/astrazeneca.svg';
import BarclaysLogo from '@images/logos/barclays-wide.svg';
// import BPLogo from '@images/logos/bp.svg';
import BATLogo from '@images/logos/british-american-tobacco.svg';
import CapitalOneLogo from '@images/logos/capital-one.svg';
import CokeLogo from '@images/logos/coca-cola.svg';
import DHLLogo from '@images/logos/dhl.svg';
import GreeneKingLogo from '@images/logos/greene-king.svg';
import LowellLogo from '@images/logos/lowell.svg';
import MarksAndSpencerLogo from '@images/logos/marks-and-spencer.svg';
import PrimarkLogo from '@images/logos/primark.svg';
import TataLogo from '@images/logos/tata.svg';
import ThalesLogo from '@images/logos/thales.svg';

const LOGOS = [
  {
    logo: AstrazenecaLogo,
    link: 'https://astrazeneca.com',
  },
  {
    logo: BarclaysLogo,
    link: 'https://barclays.com',
  },
  // {
  //   logo: BPLogo,
  //   link: 'https://bp.com',
  // },
  {
    logo: BATLogo,
    link: 'https://bat.com',
  },
  {
    logo: CapitalOneLogo,
    link: 'https://capital-one.com',
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
    logo: GreeneKingLogo,
    link: 'https://greeneking.com',
  },
  {
    logo: LowellLogo,
    link: 'https://lowell.com',
  },
  {
    logo: MarksAndSpencerLogo,
    link: 'https://mands.com',
  },
  {
    logo: PrimarkLogo,
    link: 'https://primark.com',
  },
  {
    logo: TataLogo,
    link: 'https://tata.com',
  },
  {
    logo: ThalesLogo,
    link: 'https://thales.com',
  },
];

const WorkedWith = () => (
  <Section id="work" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
    <Container>
      <div>
        <h1>I've worked with</h1>
        <LogoGrid>
          {LOGOS.map(({ logo, link }) => (
            <ExternalLink key={link} href={link}>
              <object
                type="image/svg+xml"
                data={logo}
                alt="link"
                aria-label="link"
              />
            </ExternalLink>
          ))}
        </LogoGrid>
      </div>
    </Container>
  </Section>
);

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 50px;

  a {
    width: 47%;
    height: auto;
    padding: 6.5%;

    object {
      pointer-events: none;
      filter: brightness(0) invert(0);

      @media (prefers-color-scheme: dark) {
        filter: brightness(0) invert(1);
      }
    }
  }

  @media only screen and (min-width: 550px) {
    a {
      width: 32.3%;
      height: auto;
      padding: 4.5%;
    }
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    a {
      width: 24%;
      height: auto;
      padding: 2.5% 4%;
    }
  }

  @media only screen and (min-width: 1420px) {
    a {
      width: 20%;
      height: auto;
      padding: 2.5% 4%;
    }
  }
`;

export default WorkedWith;
