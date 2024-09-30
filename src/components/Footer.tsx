import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(255,255, 255, 0.1);
  color: white;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  bottom: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterNav = styled.div`
  margin-bottom: 1rem;
`;

const FooterNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 0 1rem;
  transition: color 0.3s;

  &:hover {
    color: #a0a16a;
  }
`;

const SocialIcons = styled.div`
  margin: 1rem 0;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #a0a16a;
  }
`;

const FooterBottom = styled.div`
  font-size: 0.875rem;
  margin-top: 1rem;
  color: #fff;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNav>
          <FooterNavLink href="/">HOME </FooterNavLink>
          <FooterNavLink href="/about">ABOUT</FooterNavLink>
          <FooterNavLink href="/products">PRODUCTS</FooterNavLink>
          <FooterNavLink href="/auth">SING IN / SIGN UP</FooterNavLink>
        </FooterNav>
        <SocialIcons>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
        </SocialIcons>
        <FooterBottom>
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;