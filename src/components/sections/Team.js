import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Josh Peck',
    image: 'josh.jpg',
    role: 'Founder',
  },
  {
    name: 'Lisa Haydon',
    image: 'lisa.jpg',
    role: 'Art Director',
  },
  {
    name: 'Ashlyn Harris',
    image: 'ashlyn.jpg',
    role: 'Frontend Engineer',
  },
  {
    name: 'Todd Joseph',
    image: 'todd.jpg',
    role: 'Designer',
  },
  {
    name: 'Martin White',
    image: 'martin.jpg',
    role: 'Backend Engineer',
  },
  {
    name: 'Rose Leslie',
    image: 'rose.jpg',
    role: 'Marketing',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section
        id="team"
        style={{ background: 'var(--bg)', color: 'var(--text)' }}
      >
        {/* <Section id="team" accent="secondary"> */}
        <Container style={{ position: 'relative' }}>
          <Title>
            <h1>The Team</h1>
          </Title>
          <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Name>{name}</Name>
                  <JobTitle>{role}</JobTitle>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: min-content;
  grid-gap: 24px;
  justify-content: start;
  width: 100%;
  margin-top: 72px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 50px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    width: 75%;
    grid-template-columns: repeat(auto-fill, 200px);
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    width: 65%;
    justify-content: space-between;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Name = styled.p`
  margin-top: 16px;
  color: var(--text);
`;

const JobTitle = styled.p`
  color: var(--text);
`;

export default Team;
