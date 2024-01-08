import React, { useState, useEffect } from 'react';

import { images, styles } from '../constants';

import { motion } from 'framer-motion';
import useGlobals from '../globals';

const SearchBar = () => {
  const globals = useGlobals();

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    globals.setSearch(value);
  }, [value]);

  return (
    <motion.section
      initial={{ opacity: 0, y: '-30%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`${styles.paddingSmall} flex gap-4 items-center`}
    >
      <img
        src={images.iconSearch}
        alt="search"
        className="w-[24px] h-[24px]"
      />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="bg-primary outline-none w-full md:min-w-[300px] min-w-[220px] text-white focus:border-b-lightGray border-b-2 border-b-primary py-2 hover:cursor-pointer"
        value={value}
        onChange={handleChange}
      />
    </motion.section>
  );
};

export default SearchBar;
