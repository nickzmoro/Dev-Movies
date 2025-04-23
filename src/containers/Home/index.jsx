import Button from "../../components/Button/index.jsx";
import { Background, Poster, HomeContent, ContainerButtons } from "./styles.js";
import { Slider } from "../../components/Slider/index.jsx";
import { getImages } from "../../utils/getImages.js";
import Modal from "../../components/Modal/index.jsx";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import {
  getMovies,
  getPopularPerson,
  getTopMovies,
  getTopSeries,
} from "../../services/getData.js";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [personPopular, setPersonPopular] = useState();
  const navigate = useNavigate();

  // useEffect -> efeito colateral
  useEffect(() => {
    Promise.all([
      getMovies(),
      getTopMovies(),
      getTopSeries(),
      getPopularPerson(),
    ])
      .then(([movie, topMovies, topSeries, personPopular]) => [
        setMovie(movie),
        setTopMovies(topMovies),
        setTopSeries(topSeries),
        setPersonPopular(personPopular),
      ])
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <HomeContent>
            <div className="home-int">
              <div>
                <h2>Filme popular</h2>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
              </div>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </div>
            <Poster posterImg={getImages(movie.poster_path)}></Poster>
          </HomeContent>
        </Background>
      )}

      {topMovies && (
        <Slider
          info={topMovies}
          title={"Top Filmes"}
          slidesPerView={5}
        ></Slider>
      )}

      {topSeries && (
        <Slider
          info={topSeries}
          title={"Top Séries"}
          slidesPerView={5}
        ></Slider>
      )}

      {personPopular && (
        <Slider
          info={personPopular}
          title={"Artistas Populares"}
          slidesPerView={5}
        ></Slider>
      )}
    </>
  );
}
