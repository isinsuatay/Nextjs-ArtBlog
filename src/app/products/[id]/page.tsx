"use client";

import { useParams } from 'next/navigation'; 
import styled from 'styled-components';
import { motion } from 'framer-motion'; 
import Link from 'next/link'; 
import products from '@/data/products'; 

const Container = styled(motion.div)`
    padding: 20px;
    color: white;
    max-width: 800px; 
    margin: auto; 
    overflow: hidden;
`;

const ProductTitle = styled(motion.h1)`
    font-size: 2rem;
    margin-bottom: 20px; 
`;

const DescriptionWrapper = styled.div`
    position: relative; 
    padding: 15px;
    border-radius: 10px; 
    background: rgba(255, 255, 255, 0.1); 
    color: gray;
`;

const ProductDescription = styled(motion.p)`
    font-size: 1.2rem;
    margin-top: 10px; 
`;

const ProductImage = styled(motion.img)`
    width: 100%; 
    height: auto; 
    max-height: 450px; 
    object-fit: contain; 
    border-radius: 10px; 
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const BackButton = styled(Link)`
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }
`;

const ProductDetail = () => {
    const { id } = useParams(); 
    const productId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id); 
    const product = products.find((p) => p.id === productId); 

    if (!product) {
        return <Container>No product found.</Container>;
    }

    return (
        <Container
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
        >
                        <BackButton href="/products">Go Back</BackButton>

            <ProductTitle
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {product.name}
            </ProductTitle>
            <ProductImage
                src={product.image}
                alt={product.name}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />
            <DescriptionWrapper>
                <ProductDescription
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {product.description}
                </ProductDescription>
            </DescriptionWrapper>
        </Container>
    );
};

export default ProductDetail;