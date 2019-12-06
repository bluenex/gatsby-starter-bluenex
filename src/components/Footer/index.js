import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 100px;
  background-color: #44464b;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFooterText = styled.div`
  text-align: center;
  color: white;
`;

const StyledLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: #419eda;
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterText>
      Made at&nbsp;
      <StyledLink href="#">here</StyledLink>
      &nbsp;from Thailand
      <br />
      Make change at&nbsp;
      <StyledLink href="https://github.com/bluenex/gatsby-starter-bluenex/">bluenex/gatsby-starter-bluenex</StyledLink>
    </StyledFooterText>
  </StyledFooter>
);

export default Footer;
