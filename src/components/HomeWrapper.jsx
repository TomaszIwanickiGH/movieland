import React from 'react';
import { Trending, Recommended } from './index';
import useGlobals from '../globals';

const HomeWrapper = () => {
  const globals = useGlobals();
  console.log(globals.search === '');
  return (
    <div className="md:mt-[-1rem] mt-4 w-full">
      {globals.search === '' && <Trending />}
      <Recommended />
    </div>
  );
};

export default HomeWrapper;
