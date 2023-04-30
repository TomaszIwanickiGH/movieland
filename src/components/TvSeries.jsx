import React, { useEffect } from 'react'
import { styles } from '../constants'
import data from '../constants/data.json'

import { Card } from '../components'

import { useSelector } from 'react-redux'

const TvSeries = () => {
  const search = useSelector((state) => state.search)

  let countItems = []

  useEffect(() => {
    countItems = []
  }, [search])

  return (
    <section className={`${styles.paddingSmall} flex flex-col gap-6 relative mt-4 md:mt-0`}>
      <h2 className="text-white text-[32px] font-[500]">TV Series</h2>

      {data.map((data) => {
        if (data.category === 'TV Series' && data.title.includes(search)) countItems.push(data.title)
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

      <div className="flex flex-wrap xl:justify-start justify-center md:gap-8 gap-4">
        {data.map((data) => {
          if (data.category === 'TV Series' && data.title.includes(search)) return <Card key={data.title} image={data.thumbnail.regular.small} isMarked={data.isBookmarked} {...data} />
        })}
      </div>
    </section>
  )
}

export default TvSeries
