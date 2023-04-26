import React from 'react'
import { styles } from '../constants'
import data from '../constants/data.json'

import { Card } from '../components'

const Movies = () => {
  return (
    <section className={`${styles.paddingSmall} flex flex-col gap-6 relative mt-4 md:mt-0`}>
      <h2 className="text-white text-[32px] font-[500]">Movies</h2>
      <div className="flex flex-wrap xl:justify-start justify-center md:gap-8 gap-4">
        {data.map((data) => {
          if (data.category === 'Movie') return <Card key={data.title} image={data.thumbnail.regular.small} isMarked={data.isBookmarked} {...data} />
        })}
      </div>
    </section>
  )
}

export default Movies
