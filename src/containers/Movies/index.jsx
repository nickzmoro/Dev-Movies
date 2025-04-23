import { useEffect, useState } from "react";
import { getMovies } from "../../services/getData";
import { getImages } from "../../utils/getImages";

export function Movie() {
  const [moviePopular, setMoviePopular] = useState();

  useEffect(() => {
    Promise.all([getMovies()])
      .then(([moviePopular]) => [setMoviePopular(moviePopular)])
      .catch((error) => console.error(error));
  }, []);

  console.log(moviePopular);

  return (
    <div>
      <h2>Filme mais popular</h2>
      <p>com + de {moviePopular.popularity} fãs</p>
      <h4>{moviePopular.title}</h4>
      <p>{moviePopular.overview}</p>
      <span>
        {moviePopular.adult
          ? "Para maiores de 18 anos."
          : "Permitido para menores de idade."}
      </span>
      <p>Data de lançamento: {moviePopular.release_date}</p>
      <img src={getImages("/iT6yYCAuMQwm1PV4nByrsrsIOhG.jpg")} alt="" />
    </div>
  );
}
