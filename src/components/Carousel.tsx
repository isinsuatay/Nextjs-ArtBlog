"use client";

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSlider = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Slide = styled(motion.div) <{ bgImage: string }>`
  width: 70%;
  height: 60%; 
  background-image: url(${(props) => props.bgImage});
  background-size:cover;
  background-position: center;
  position: absolute;
  border-radius: 20px; 
  transform: translate(-50%, -50%);

  /* Parallax effect */
  &:nth-child(odd) {
    filter: brightness(0.9);
  }
`;

const TextOverlay = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 3rem; 
  font-weight: bold;

  h1 {
    margin: 0;
    font-size: 4rem; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); 
  }

  p {
    margin: 10px 0 0;
    font-size: 1.5rem; 
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); 
  }

  @media (max-width: 768px) {
  position:relative;
  top:40%;
  left:0;

  }

  @media (max-width: 480px) {
   position:relative;
  top:40%;
  left:0;
  }
`;

const PaginationDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%; 
  transform: translateX(-50%); 
  display: flex;
  gap: 10px;
  z-index: 3; 
`;

const Dot = styled(motion.button)`
  width: 40px;
  height: 12px;
  border-radius: 10%;
  background-color: white;
  border: 2px solid rgba(255, 255, 255, 0.5); 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.2); 
    background-color: rgba(255, 255, 255, 0.8); 
  }
`;
const images = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
];

const slideTexts = [
  { title: "Welcome", description: "To the Future" },
  { title: "Explore", description: "Creativity Unleashed" },
  { title: "Inspire", description: "New Horizons Await" },
  { title: "Discover", description: "Endless Possibilities" },
];

const CustomSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <StyledSlider>
      {images.map((image, index) => (
        <Slide
          key={index}
          bgImage={image}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: index === activeIndex ? 1 : 0,
            y: index === activeIndex ? 0 : 100,
          }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          style={{ zIndex: index === activeIndex ? 1 : 0 }}
        >
          {index === activeIndex && (
            <TextOverlay
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
            >
              <h1>{slideTexts[index].title}</h1>
              <p>{slideTexts[index].description}</p>
            </TextOverlay>
          )}
        </Slide>
      ))}

      {/* Pagination Dots */}
      <PaginationDots>
        {images.map((_, index) => (
          <Dot
            key={index}
            onClick={() => handleDotClick(index)}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </PaginationDots>
    </StyledSlider>
  );
};

export default CustomSlider;