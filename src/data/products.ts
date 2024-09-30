interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Table 1",
        description: "Description of Table 1",
        image: "/images/product1.jpeg"
    },
    {
        id: 2,
        name: "Table 2",
        description: "Description of Table 2",
        image: "/images/product2.jpeg" 
    },
    {
        id: 3,
        name: "Table 3",
        description: "Description of Table 3",
        image: "/images/product3.jpeg"
    },
    {
        id: 4,
        name: "Table 4",
        description: "Description of Table 4",
        image: "/images/product4.jpeg" 
    },
    {
        id: 5,
        name: "Table 5",
        description: "Description of Table 5",
        image: "/images/product5.jpeg" 
    },
    {
        id: 6,
        name: "Table 6",
        description: "Description of Table 6",
        image: "/images/product6.jpeg" 
    }
];

export default products;