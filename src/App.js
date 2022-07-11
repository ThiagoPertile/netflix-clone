import React, { useEffect, useState } from "react";
import "./App.css";
import FeatureMovie from "./Components/FeatureMovie";
import MovieRow from "./Components/MovieRow";
import tmbd from "./tmbd";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmbd.getHomeList();
      setMovieList(list);

      let bestMovies = list.filter((i) => i.slug === "toprate");
      let randomChosen = Math.floor(
        Math.random() * (bestMovies[0].items.results.length - 1)
      );
      let chosen = bestMovies[0].items.results[randomChosen];
      console.log(chosen);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeatureMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
