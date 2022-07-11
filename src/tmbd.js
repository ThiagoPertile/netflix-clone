// ARQUIVO RESPONSAVEL POR LIDAR COM AS REQUISISOES PARA O BANCO DE DADOS

const API_KEY = "8d1532b4ab1ed4df5a186e09aa21c8d7";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      //   {
      //     slug: "originals",
      //     title: "Originais Netflix",
      //     itens: await basicFetch(`/network/{213}?api_key=${API_KEY}`),
      //   },
      {
        slug: "trending",
        title: "Recomendadospara você",
        items: await basicFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Melhor Avaliados",
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=28`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=35`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=27`
        ),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=18`
        ),
      },
      {
        slug: "sci-fi",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=878`
        ),
      },
    ];
  },
};
