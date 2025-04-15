import api from "./api";

export async function getMovies() {
  // filme popular
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results[0];
}

export async function getTopMovies() {
  // top filmes
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
}

export async function getTopSeries() {
  // top series
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
}

export async function getPopularPerson() {
  // serie popular
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
}

export async function getMovie(movieId) {
  // filme popular
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results[0];
}
