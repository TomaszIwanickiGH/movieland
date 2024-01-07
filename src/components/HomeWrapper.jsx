import React from 'react';
import { Trending, Recommended } from './index';

const HomeWrapper = () => {
  return (
    <div className="md:mt-[-1rem] mt-4 w-full">
      <Trending />
      <Recommended />
    </div>
  );
};

export default HomeWrapper;
