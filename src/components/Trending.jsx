import React from 'react'
import { images, styles } from '../constants'
import data from '../constants/data.json'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

const TrendingCard = ({ bgImage, title, year, category, rating }) => (
  <div id="trending" style={{ backgroundImage: `url(${bgImage})` }} className={`${styles.paddingTrending} flex justify-between rounded-lg md:min-w-[470px] min-w-[240px] md:min-h-[230px] min-h-[140px] relative hover:cursor-pointer bg-black hover:opacity-70`}>
    <div className="flex flex-col justify-end">
      <div className="flex gap-2 text-white md:text-[16px] text-[13px]">
        <p className="text-gray-300 md:text-[16px] text-[13px]">{year}</p>
        <p className="font-bold text-gray-300 md:text-[16px] text-[13px]"> · </p>
        <p className="flex items-center justify-center gap-1 text-gray-300 md:text-[16px] text-[13px]">
          <img src={category === 'Movie' ? images.iconCategoryMovie : images.iconCategoryTv} className="w-[12px] h-[12px]" /> {category}
        </p>
        <p className="font-bold text-gray-300 md:text-[16px] text-[13px]"> · </p>
        <p className="text-gray-300 md:text-[16px] text-[13px]">{rating}</p>
      </div>
      <h2 className="text-white md:text-[24px] text-[20px] font-[600] tracking-[1.5px]">{title}</h2>
    </div>

    <div id="show" className="hidden show-button">
      <div className="flex items-center justify-center bg-lightGray rounded-3xl w-[120px] h-[50px] gap-4 button-opacity">
        <img src={images.iconPlay} alt="play" />
        <p className="text-white font-[600]">Play</p>
      </div>
    </div>

    <div className="flex items-center justify-center bg-black opacity-60 rounded-full w-[32px] h-[32px]">
      <img src={images.iconBookmarkEmpty} alt="" className="w-[11px] h-[14px]" />
    </div>
  </div>
)

const Trending = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 500
    } else {
      current.scrollLeft += 500
    }
  }

  return (
    <section className={`${styles.paddingSmall} flex flex-col gap-6 relative w-full`}>
      <h2 className="text-white text-[32px] font-[500]">Trending</h2>
      <div className="flex flex-1">
        <div className="flex gap-8 scrollbar" ref={scrollRef}>
          {data.map((data) => {
            if (data.isTrending) return <TrendingCard key={data.title} bgImage={data.thumbnail.trending.small} {...data} />
          })}

          <div className="flex justify-between items-center px-2 xl:w-[98.5%] lg:w-[98%] md:w-[95%] w-[90%] absolute top-[63%] translate-y-[-50%]">
            <BsArrowLeftShort className="text-white text-[2rem] cursor-pointer bg-black rounded-[5px] hover:text-lightGray" onClick={() => scroll('left')} />
            <BsArrowRightShort className="text-white text-[2rem] cursor-pointer bg-black rounded-[5px] hover:text-lightGray" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending
