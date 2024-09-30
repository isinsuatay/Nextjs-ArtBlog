"use client"; 
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box; 
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #f4f4f4;
    color: white; 
    overflow-x: hidden;
  }

body:before {
  content: "";
  position: fixed; 
  left: 50%; 
  top: 0;
  width: 200%; 
  height: 100%;
  background-color: #a0a16a;
  transform: translateX(-50%) rotate(45deg);
  z-index: -1;
}
`;
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer /> 
    </>
  );
};

export default Layout;