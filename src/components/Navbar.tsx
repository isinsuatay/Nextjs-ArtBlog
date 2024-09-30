"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.div<{ $isOpen: boolean }>` 
  display: flex;
  gap: 2rem;
  flex-direction: row;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')}; 
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    max-height: ${({ $isOpen }) => ($isOpen ? '100%' : '0')}; 
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    padding-top: 5rem; 
    z-index: 999;
  }

  @media (min-width: 769px) {
    display: flex;
    max-height: none; 
    opacity: 1; 
  }
`;

const NavLink = styled(Link)`
  color: #a0a16a;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;
    border-bottom: 5px dotted #a0a16a;
  }
`;

const Hamburger = styled.div<{ $isOpen: boolean }>` 
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  ${({ $isOpen }) => $isOpen && `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
<NavbarContainer>
      <Logo>
        <NavLink href="/" style={{ color: "#fff" }}>MyArtBlog</NavLink>
      </Logo>
      <Hamburger 
        $isOpen={isOpen} 
        onClick={toggleMenu} 
        aria-expanded={isOpen} 
        aria-label="Toggle navigation"
      > 
        <div />
        <div />
        <div />
      </Hamburger>
      <NavLinks $isOpen={isOpen}>
        <NavLink href="/" onClick={handleLinkClick}>HOME</NavLink>
        <NavLink href="/about" onClick={handleLinkClick}>ABOUT</NavLink>
        <NavLink href="/products" onClick={handleLinkClick}>PRODUCTS</NavLink>
        <NavLink href="/auth" onClick={handleLinkClick}>SIGN IN / SIGN UP</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;