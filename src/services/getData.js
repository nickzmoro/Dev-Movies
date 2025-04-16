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

export async function getMovieVideos(movieId) {
  // filme popular
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results;
}

export async function getMovieCredits(movieId) {
  // créditos do filme
  const { data } = await api.get(`/movie/${movieId}/credits`);

  return data;
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);

  return data;
}
