import { useEffect, useState } from "react";
import { getMovies } from "../../services/getData";
import LoadingPage from "../../components/LoadingPage";
import PopularPage from "../../components/PopularPage";

export function Movie() {
  const [moviePopular, setMoviePopular] = useState();

  useEffect(() => {
    setTimeout(() => {
      Promise.all([getMovies()])
        .then(([moviePopular]) => [setMoviePopular(moviePopular)])
        .catch((error) => console.error(error));
    }, 250);
  }, []);

  console.log(moviePopular);

  return (
    <>
      {moviePopular ? (
        <PopularPage
          titlePage={"Filme mais popular"}
          bgSrc={moviePopular.backdrop_path}
          popularity={moviePopular.popularity}
          name={moviePopular.title}
          overview={moviePopular.overview}
          age={moviePopular.adult}
          releaseDate={moviePopular.release_date}
          imgPoster={moviePopular.poster_path}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
