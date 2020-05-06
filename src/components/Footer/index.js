import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/ui';

const StyledFooter = styled.div`
  height: 5.5em;
  background-color: #44464b;

  display: flex;
  align-items: center;
  justify-content: center;

  /* on small screen it could be 4 lines */
  ${media.extraSmall`
    height: 6.5em;
  `}
`;

const StyledFooterText = styled.div`
  font-size: 0.75em;
  text-align: center;
  color: #eee;
  line-height: 1.6em;
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
