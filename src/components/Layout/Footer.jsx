import React from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';

const FooterWrapper = styled.div`
  padding-bottom: 15px;
  padding-right: 20px;
  background-color: #e9e9e9;
`;

const FooterLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  color: #999;
  margin-left: 10px;

  &:hover {
    color: #1caff6;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Typography variant="body1" align="right">
      <FooterLink href="https://telegram.me/vkhitev">Vlad Khitev</FooterLink>
      <FooterLink href="https://telegram.me/irmnchk">Ivan Romanchuk</FooterLink>
    </Typography>
  </FooterWrapper>
);

export default Footer;
