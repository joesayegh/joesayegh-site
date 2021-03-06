import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  Wordmark,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as SiteLogo } from '@static/logo.svg';
import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

// const NAV_ITEMS = ['About', 'Work', 'Team', 'FAQ'];
const NAV_ITEMS = ['About', 'Work', 'FAQ'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      // <Nav {...this.props}>
      <Nav>
        <StyledContainer>
          {/* <Brand>Joe Sayegh</Brand> */}
          <a href="/">
            <Brand>
              <SiteLogo style={{ fill: 'var(--text)' }} />
              <Wordmark>Joe Sayegh</Wordmark>
            </Brand>
          </a>
          <Mobile>
            {/* BURGER ICON */}
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: 'var(--text)' }}
              aria-labelledby="menubutton"
            >
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
