import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { config } from '@fortawesome/fontawesome-svg-core';
import { Container } from './BaseComponents/container';
import NavBar from './Navbar';
import Footer from './Footer';
import SEO from './BaseComponents/SEO';
import { initFontAwesome } from '../utils/fontawesome';

// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-471940596
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const FixHorizontalScroll = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;

const StickyFooterWrapper = styled.div`
  /* sticky footer */
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #419eda;
  }
`;

// every page uses layout so load fontawesome here
initFontAwesome();

const Layout = ({ children }) => (
  <>
    <SEO />
    <FixHorizontalScroll />
    <StickyFooterWrapper>
      <NavBar>
        <StyledLink to="/">
          Home
        </StyledLink>
        <StyledLink to="/about">
          About
        </StyledLink>
      </NavBar>

      <Container>
        {children}
      </Container>

      <Footer />
    </StickyFooterWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
