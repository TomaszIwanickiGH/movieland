import React, { useState } from 'react';
import { images, utils } from '../constants';
import { Link } from 'react-router-dom';

import LogoConverter from './LogoConverter';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState(1);

  return (
    <motion.nav
      initial={{ opacity: 0, x: '-30%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="flex lg:flex-col flex-row justify-between items-center bg-darkBlue rounded-lg lg:w-fit xl:min-w-[100px] p-6 lg:h-[90vh]"
    >
      <Link to="/">
        <img
          src={images.logo}
          alt="logo"
          className="sm:w-[40px] w-[30px] sm:h-[35px] h-[30px]"
        />
      </Link>

      <ul className="flex lg:flex-col flex-row list-none sm:gap-10 gap-8 items-center lg:mt-[-8rem]">
        {utils.map((nav) => (
          <Link
            key={nav.path}
            to={nav.path}
          >
            <li
              className="hover:opacity-50"
              onClick={() => {
                setActive(nav.id);
              }}
            >
              <LogoConverter
                {...nav}
                fill={active === nav.id ? '#fff' : '#5A698F'}
              />
            </li>
          </Link>
        ))}
      </ul>

      <img
        src={images.imageAvatar}
        alt="avatar"
        className="sm:w-[40px] h-[30px] sm:h-[40px] w-[30px] lg:mt-70"
      />
    </motion.nav>
  );
};

export default Navbar;
