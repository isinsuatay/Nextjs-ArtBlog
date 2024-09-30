/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.pinimg.com'], // Allow external sources for images
    },
    compiler: {
      // styled-components 
      styledComponents: true,
    },
  };
  
  export default nextConfig;