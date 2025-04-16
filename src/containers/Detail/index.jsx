import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Background, Cover, Info } from "./styles";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";

export function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    Promise.all([
      getMovieById(id),
      getMovieVideos(id),
      getMovieCredits(id),
      getMovieSimilar(id),
    ])
      .then(([movie, videos, credits, similar]) => [
        console.log({ movie, videos, credits, similar }),
        setMovie(movie),
        setMovieVideos(videos),
        setMovieCredits(credits),
        setMovieSimilar(similar),
      ])
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)}></img>
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <div>
                {movie.genres.map((item) => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
              <div>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h3>Créditos</h3>
                <div>
                  {movieCredits.cast.map((item) => (
                    <div key={item.id}>
                      <img src={getImages(item.profile_path)} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Info>
          </Container>
        </>
      )}
    </>
  );
}
