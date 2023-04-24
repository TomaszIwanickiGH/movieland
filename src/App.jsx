import React from 'react'
import { Navbar, SearchBar, HomeWrapper, Movies, TvSeries, Bookmarked } from './components'

import { Route, Routes } from 'react-router-dom'
import { styles } from './constants'

const App = () => {
  return (
    <div className={`${styles.padding} bg-primary`}>
      <div className="flex gap-12">
        <Navbar />
        <div>
          <SearchBar />
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<TvSeries />} />
            <Route path="/bookmarked" element={<Bookmarked />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
