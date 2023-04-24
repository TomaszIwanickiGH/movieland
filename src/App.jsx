import React from 'react'
import { Navbar, SearchBar, HomeWrapper, Movies, TvSeries, Bookmarked } from './components'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </div>
  )
}

export default App
