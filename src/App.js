import React, { useEffect, useState } from "react";
import "./App.css";
import MovieRow from "./Components/MovieRow";
import tmbd from "./tmbd";

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmbd.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
