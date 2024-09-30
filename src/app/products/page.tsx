"use client";

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../../data/products';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ProductListContainer = styled(motion.ul)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 50px;
`;

const ProductCard = styled(motion.li)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    height: 700px;
`;

const ProductImage = styled(motion.img)`
    width: 300px;
    height: 400px;
    object-fit: cover;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease; 
    z-index: 2;
    border-radius: 5px;


`;

const Title = styled.h2`
    color: white;
`;


const LightWrapper = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 100px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    
`;

const Light = styled.img`
    width: 100%;
    height: 100%;
`;

const LightEffect = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 0;
    pointer-events: none;
`;

const StyledLink = styled.h5`
    color: white;
    text-decoration:underline;
    text-decoration-color: transparent;
    position: relative;
    transition: text-decoration-thickness 0.3s ease;

    &::after {
        content: '';
        display: block;
        height: 2px; 
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -15px; 
        transform: scaleX(1);
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(0);
    }
`;

const ProductList: React.FC = () => {
    return (
        <Container>
            <ProductListContainer
                variants={{
                    initial: {},
                    animate: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                initial="initial"
                animate="animate"
            >
                <AnimatePresence>
                    {products.map(product => (
       <ProductCard
       key={product.id}
       variants={{
           initial: { opacity: 0, y: 20 },
           animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
           exit: { opacity: 0, y: 20 },
       }}
       initial="initial"
       animate="animate"
       exit="exit"
   >
       <LightWrapper>
           <Light src="/sconce.png" alt="Light" />
       </LightWrapper>
       <LightEffect />
       <Link href={`/products/${product.id}`}>
           <ProductImage
               src={product.image}
               whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} 
               whileTap={{ scale: 0.9 }}
           />
           <StyledLink>View Details</StyledLink>
       </Link>
       <Title>{product.name}</Title>
   </ProductCard>
                    ))}
                </AnimatePresence>
            </ProductListContainer>
        </Container>
    );
};

export default ProductList;