import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
`;

interface ContainerProps {
  isVisible: boolean;
}

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  overflow-x: hidden;
  background-color: transparent;
  color: #000;
  margin: 20px;
  animation: ${({ isVisible }) => (isVisible ? slideDown : slideUp)} 0.8s ease-out forwards;
`;

const TextContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  text-align: center; 
  background: linear-gradient(135deg, #f3f4f6, #d1d5db); 
  border-radius: 15px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
`;

const Title = styled.h3`
  font-size: 2em;
  margin-bottom: 10px;
  color: #1f2937; 
  transition: color 0.3s; 
  &:hover {
    color: #a0a16a; 
  }
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #374151; 
`;

const Button = styled(Link)` 
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #1f2937; 
  border: none;
  border-radius: 5px;
  text-decoration: none; 
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4b5563; 
  }
`;

const Text: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <Container ref={containerRef} isVisible={isVisible}>
      <TextContainer>
        <Title>ABOUT US</Title>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestias at voluptatum, dolore repudiandae quos assumenda, amet beatae minima ipsam laboriosam cum tempore sint? Rem, quasi reprehenderit eos harum accusantium doloribus possimus qui? Vitae fugiat impedit sapiente earum voluptatum, corrupti quas tempora laudantium! Nihil eum explicabo est veritatis corrupti quia aliquid quidem distinctio quibusdam debitis, in cum delectus id. At harum quidem tenetur alias amet nulla soluta ducimus aspernatur omnis commodi. Cupiditate eius ducimus, laborum sed odio, inventore deleniti expedita a quidem, fuga doloremque excepturi voluptatum commodi accusantium vitae quam qui voluptatem. Recusandae magnam vero, reprehenderit quae minima velit tenetur!
        </Paragraph>
        <Button href="/about">Learn More</Button> 
      </TextContainer>
    </Container>
  );
};

export default Text;