import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: var(--bg);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: var(--text);
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: var(--bg);
`;

export const Brand = styled.div`
  // COMMENT THIS OUT IF NOT USING TEXT WITH LOGO
  color: var(--text);
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
  display: flex;
  justify-content: center;
  align-items: center;
  // COMMENT THIS OUT IF NOT USING TEXT WITH LOGO

  svg {
    width: 100%;
    max-width: 30px;

    // @media (min-width: ${props => props.theme.screen.md}) {
    //   max-width: 40px;
    // }
  }
`;

export const Mobile = styled.div`
  display: block;

  @media (min-width: ${props => props.theme.screen.md}) {
    display: none;
  }

  ${props =>
    props.hide &&
    `
    display: none;

    @media (min-width: ${props.theme.screen.md}) {
      display: block;
    }
  `}
`;
