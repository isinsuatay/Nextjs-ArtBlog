"use client";

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  width: 80%; 
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px; 
  margin-top:60px;
  margin-bottom:60px;
  text-align: center;
  background-color: #f9f9f9; 
  border-radius: 10px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 

  @media (max-width: 768px) {
    padding: 40px; 
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333; 
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  color: #555; 
  line-height: 1.6; 

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.div`
  margin: 20px 0;
  width: 100%; 
  padding: 20px;
  background-color: #fff; 
  border-radius: 8px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #444; 
  margin-bottom: 10px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #666; 
  line-height: 1.5; 
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About My Art Blog</Title>
      <Description>
        Welcome to my art blog, a space where creativity comes to life. I am passionate about expressing my thoughts and emotions through various art forms. Here, you&apos;ll find a collection of my artworks, insights into my creative process, and stories that inspire me.
      </Description>
      <Section>
        <SectionTitle>My Artistic Journey</SectionTitle>
        <SectionText>
          My journey as an artist began at a young age, fueled by a desire to explore and experiment with different mediums. From painting to digital art, each piece reflects my unique perspective and growth as an artist.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>What You&apos;ll Find Here</SectionTitle>
        <SectionText>
          In this blog, I share not only my finished pieces but also the behind-the-scenes of my artistic process. Expect tutorials, tips, and discussions about techniques that inspire me and could help you in your own creative endeavors.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Get Involved</SectionTitle>
        <SectionText>
          I encourage you to engage with my work and share your thoughts. Your feedback and support mean the world to me and help foster a community of art lovers and creators. Let&apos;s inspire each other!
        </SectionText>
      </Section>
    </AboutContainer>
  );
};

export default About;