import React, { useState } from 'react';
import { images } from '../constants';

const Card = ({ image, title, category, year, rating, isMarked }) => {
  const [toggle, setToggle] = useState(isMarked);
  return (
    <div
      id="trending"
      className={`flex flex-col gap-2 hover:cursor-pointer w-full`}
    >
      <div className="relative card-bg">
        <img
          src={image}
          className="rounded-md card-bg w-full"
        />
        <div
          id="show"
          className="hidden show-button"
        >
          <div className="flex items-center justify-center bg-lightGray rounded-3xl button-opacity">
            <img
              src={images.iconPlay}
              alt="play"
            />
          </div>
        </div>
        <div
          className="flex items-center justify-center bg-black hover:bg-lightGray hover:opacity-100 opacity-60 rounded-full w-[32px] h-[32px] absolute top-[10px] right-[10px]"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? images.iconBookmarkFull : images.iconBookmarkEmpty}
            alt=""
            className="w-[11px] h-[14px]"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 text-white md:text-[16px] text-[13px]">
          <p className="text-gray-300 md:text-[16px] text-[13px]">{year}</p>
          <p className="font-bold text-gray-300 md:text-[16px] text-[13px]"> · </p>
          <p className="flex items-center justify-center gap-1 text-gray-300 md:text-[16px] text-[13px]">
            <img
              src={category === 'Movie' ? images.iconCategoryMovie : images.iconCategoryTv}
              className="w-[12px] h-[12px]"
            />{' '}
            {category}
          </p>
          <p className="font-bold text-gray-300 md:text-[16px] text-[13px]"> · </p>
          <p className="text-gray-300 md:text-[16px] text-[13px]">{rating}</p>
        </div>
        <h2 className="text-white text-[18px] font-[600] tracking-[1.5px]">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
