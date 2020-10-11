import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        selfie_one: file(
          sourceInstanceName: { eq: "me" }
          name: { eq: "IMG_5284" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        keyboard: file(
          sourceInstanceName: { eq: "me" }
          name: { eq: "giorgio-trovato-v_bri4iVuiM-unsplash-cropped" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        map: file(
          sourceInstanceName: { eq: "me" }
          name: { eq: "benigno-hoyuela-Ou5bbnSZjGI-unsplash-cropped" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section
        id="about"
        style={{ background: 'var(--bg)', color: 'var(--text)' }}
      >
        <Container>
          <Title>
            <h1>About Me</h1>
          </Title>

          <Grid>
            <div>
              <p>
                Born and raised in England, I've lived in North London for most
                of my life. I was interested in technology from a young age. I
                built my first website when I was 14. This was when Netscape
                Navigator and Internet Explorer were duking it out for web
                supremacy.
              </p>
            </div>
            <Art>
              <Img
                fluid={data.selfie_one.childImageSharp.fluid}
                style={{ borderRadius: '50%', filter: 'grayscale(100%)' }}
              />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img
                fluid={data.keyboard.childImageSharp.fluid}
                style={{ borderRadius: '50%', filter: 'grayscale(100%)' }}
              />
            </Art>
            <div>
              <p>
                I have been working as a website designer, developer and founder
                of my business Square Solve. I feel incredibly lucky to be able
                to do what I love for a living especially when you consider that
                neither my job or the internet existed when I was born.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                My clients range from small local businesses all the way to
                global corporations operating all over the world. They've
                allowed me to produce work that we're both very proud of. I
                enjoy using CMS technologies such as Wordpress as well as
                cutting-edge tools such as React JS and Gatsby for statically
                generating sites and creating high-performing web applications.
                I have learnt how to use Git, GitHub and Bitbucket as part of my
                source control training and know how to work in a team.
              </p>
            </div>
            <Art>
              <Img
                fluid={data.map.childImageSharp.fluid}
                style={{ borderRadius: '50%', filter: 'grayscale(100%)' }}
              />
            </Art>
          </Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  grid-gap: 40px;
  align-items: center;
  justify-items: center;
  margin-bottom: 96px;

  ${props =>
    props.inverse &&
    `
      ${Art} {
        order: 1;
      }
  `}

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

  @media (min-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 3fr 2fr;
    text-align: right;
    margin: 24px 0;

    ${props =>
      props.inverse &&
      `
      text-align: left;
      grid-template-columns: 2fr 3fr;

      div {
        order: 2;
      }

    `}

    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
