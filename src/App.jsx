import React from 'react';
import { Navbar, SearchBar, HomeWrapper, Movies, TvSeries, Bookmarked } from './components';

import { Route, Routes } from 'react-router-dom';
import { styles } from './constants';

const App = () => {
  return (
    <div className={`${styles.padding} bg-primary h-[100vh] relative`}>
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="min-w-[100px]">
          <div className="lg:fixed">
            <Navbar />
          </div>
        </div>
        <div className="w-full">
          <SearchBar />
          <Routes>
            <Route
              path="/"
              element={<HomeWrapper />}
            />
            <Route
              path="/movies"
              element={<Movies />}
            />
            <Route
              path="/tv-series"
              element={<TvSeries />}
            />
            <Route
              path="/bookmarked"
              element={<Bookmarked />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
