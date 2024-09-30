"use client";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = [
  'https://i.pinimg.com/564x/bc/8c/03/bc8c03ba12f286713f826efc3b908e0f.jpg',
  'https://i.pinimg.com/564x/bd/75/bb/bd75bb6709e5bb1e6265428fcd0155cd.jpg',
  'https://i.pinimg.com/564x/11/c7/0f/11c70fe14a719f4d96571585c9e78b1c.jpg',
  'https://i.pinimg.com/564x/db/66/b9/db66b9c69fa8cd03fecdc7e1de8fac0b.jpg',
  'https://i.pinimg.com/564x/3b/0d/04/3b0d041dcd3e08b27bd2c31e9a93dadc.jpg',
  'https://i.pinimg.com/564x/8b/69/cd/8b69cd24fe53712ac59822bcb33a18db.jpg',
  'https://i.pinimg.com/564x/f4/a8/fa/f4a8fa4f1f33170d8f42c9c3c4233045.jpg',
  'https://i.pinimg.com/564x/f2/1b/6d/f21b6d200efe02fff5a350424945f04a.jpg',
  'https://i.pinimg.com/564x/36/46/56/364656da17c3aa2f97d76bd02672c7b6.jpg',
  'https://i.pinimg.com/564x/dc/f2/20/dcf220744bc559b60c5365fa2b63ab18.jpg',
  'https://i.pinimg.com/564x/7a/9b/7f/7a9b7fdf3565d9e1e5e002bcae0c866f.jpg',
  'https://i.pinimg.com/564x/61/52/16/615216805af99082dd145ba083bf1252.jpg'
];
const DURATION = 40000;
const ROWS = 2;
const TAGS_PER_ROW = 5;

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

const LoopSlider = styled.div<{ duration: number; reverse: boolean }>`
  --duration: ${({ duration }) => duration}ms;
  --direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
  position: relative;
  overflow: hidden; 
  margin-bottom: 2rem;
  width: 100%; 
  max-width: 100vw; 

  .inner {
    display: flex;
    width: calc(300px * ${TAGS_PER_ROW * 2}); 
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }

  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); 
    }
  }
`;

const TagContainer = styled.div<{ color: string }>`
  display: flex;
  width: 300px;
  height: 150px;
  align-items: center;
  justify-content: center;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: white; 
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;

  img {
    width: 100%; 
    height: 100%;
  }
`;

const AnimationContainer = styled.div`
  width: 100%; 
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden; 
`;

const InfiniteScrollAnimation: React.FC = () => {
  const [tags, setTags] = useState<string[][]>([]);

  useEffect(() => {
    const shuffledTags = shuffle(TAGS);
    const rows = [...Array(ROWS)].map(() => shuffledTags.slice(0, TAGS_PER_ROW));
    setTags(rows);
  }, []);

  return (
    <AnimationContainer>
      <div className="tag-list">
        {tags.map((rowTags, i) => (
          <LoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2 === 1}>
            <div className="inner">
              {rowTags.map((src) => (
                <TagContainer key={src} color={COLORS[i % COLORS.length]}>
                  <img src={src} alt="Tag" />
                </TagContainer>
              ))}
              {rowTags.map((src) => (
                <TagContainer key={src} color={COLORS[i % COLORS.length]}>
                  <img src={src} alt="Tag" />
                </TagContainer>
              ))}
            </div>
          </LoopSlider>
        ))}
      </div>
      <div className="fade"></div>
    </AnimationContainer>
  );
};

export default InfiniteScrollAnimation;