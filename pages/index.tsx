import dynamic from 'next/dynamic';
import React from 'react';

const Home = dynamic(() => import('@components/Home'), { ssr: false });

const HomePage = () => {
  return <Home />;
};

export default HomePage;
