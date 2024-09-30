"use client";

import React from 'react';
import styled from 'styled-components';
import PuzzleEffect from '../../components/PuzzleEffect';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import InfiniteScrollAnimation from '@/components/ScrollAnimation';
import Text from '@/components/Text';
import CustomSlider from '../../components/Carousel';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 100px;
  align-items: center; 
  height: 100vh; 

  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 50px;
    height: auto; 
  }
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  color: black;

  @media (max-width: 768px) {
    width: 100%; 
    align-items: center; 
  }
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center; 

  @media (max-width: 768px) {
    width: 100%; 
    align-items: center; 
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-basis: 50%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 4rem;
  text-align: center;
  width: 250px;

  @media (max-width: 768px) {
    font-size: 3rem; 
  }
`;

const SubTitle = styled.div`
  width: 250px;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%; 
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px;

  &:hover {
    background-color: #fff; 
    color: #a0a16a;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HomeScreen = () => {
  return (
    <HomeContainer>
      <CustomSlider/>
      <ContentSection>
        <LeftSide>
          <TextContainer>
            <Title>My Art Blog</Title>
            <SubTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odit reprehenderit dicta eaque, commodi nobis? Illum, dolorum. Voluptatum, sequi illo.
              </p>
              <br />
              <Link href='/products'>
                <Button>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </SubTitle>
          </TextContainer>
        </LeftSide>
        <RightSide>
          <PuzzleEffect imageSrc="/art.jpeg" canvasWidth={400} canvasHeight={600} />
        </RightSide>
      </ContentSection>
      <Text/>
      <InfiniteScrollAnimation />
    </HomeContainer>
  );
};

export default HomeScreen;