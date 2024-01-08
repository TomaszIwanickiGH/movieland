import React, { useEffect } from 'react';
import { Trending, Recommended } from './index';
import useGlobals from '../globals';
import { useSearchParams } from 'react-router-dom';

const HomeWrapper = () => {
  const globals = useGlobals();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (globals.search !== '') {
      setSearchParams({ search: globals.search });
    } else {
      setSearchParams();
    }
  }, [globals.search]);

  return (
    <div className="md:mt-[-1rem] mt-4 w-full">
      {globals.search === '' && <Trending />}
      <Recommended />
    </div>
  );
};

export default HomeWrapper;
