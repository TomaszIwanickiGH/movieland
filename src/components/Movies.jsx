import { useEffect } from 'react';

import data from '../constants/data.json';
import { styles } from '../constants';
import Container from './Container';

import { motion } from 'framer-motion';
import useGlobals from '../globals';

const Movies = () => {
  const globals = useGlobals();
  const search = globals.search;

  let countItems = [];

  useEffect(() => {
    countItems = [];
  }, [search]);

  return (
    <section className={`${styles.paddingSmall} flex flex-col gap-6 relative mt-4 md:mt-0`}>
      <motion.h2
        initial={{ opacity: 0, x: '-30%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-[32px] font-[500]"
      >
        Movies
      </motion.h2>

      {data.map((data) => {
        if (data.category === 'Movie' && data.title.includes(search)) countItems.push(data.title);
      })}

      {countItems.length === 0 ? (
        <div className="text-white text-[24px]">No results found for '{search}'</div>
      ) : search.length > 0 ? (
        <div className="text-white text-[24px]">
          Found {countItems.length} results for '{search}'
        </div>
      ) : (
        <div></div>
      )}

      <Container category="Movie" />
    </section>
  );
};

export default Movies;
