import data from '../constants/data.json';
import { Card } from '../components';

import useGlobals from '../globals';

const Container = ({ category, bookmarked }) => {
  const search = useGlobals().search;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
      {bookmarked
        ? data.map((data) => {
            if (data.category === category && data.isBookmarked && data.title.includes(search))
              return (
                <Card
                  key={data.title}
                  image={data.thumbnail.regular.small}
                  isMarked={data.isBookmarked}
                  {...data}
                />
              );
          })
        : data.map((data) => {
            if (data.category === category && data.title.includes(search))
              return (
                <Card
                  key={data.title}
                  image={data.thumbnail.regular.small}
                  isMarked={data.isBookmarked}
                  {...data}
                />
              );
          })}
    </div>
  );
};

export default Container;
