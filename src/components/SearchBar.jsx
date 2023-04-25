import React from 'react'
import { images, styles } from '../constants'

const SearchBar = () => {
  return (
    <section className={`${styles.paddingSmall} flex gap-4 items-center`}>
      <img src={images.iconSearch} alt="search" className="w-[24px] h-[24px]" />
      <input type="text" placeholder="Search for movies or TV series" className="bg-primary outline-none w-full md:min-w-[300px] min-w-[220px] text-white focus:border-b-lightGray border-b-2 border-b-primary py-2 hover:cursor-pointer" />
    </section>
  )
}

export default SearchBar
