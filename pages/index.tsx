import dynamic from 'next/dynamic';
import React from 'react';

const Home = dynamic(() => import('@components/Home'));

const HomePage = () => {
  return <Home />;
};

export default HomePage;
