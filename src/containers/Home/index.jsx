import Button from "../../components/Button/index.jsx";
import api from "../../services/api";
import { Background, Poster, HomeContent, ContainerButtons } from "./styles.js";
import { Slider } from "../../components/Slider/index.jsx";
import { getImages } from "../../utils/getImages.js";
import Modal from "../../components/Modal/index.jsx";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [personPopular, setPersonPopular] = useState();
  const navigate = useNavigate();

  // useEffect -> efeito colateral
  useEffect(() => {
    async function getMovies() {
      // filme popular
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[1]);
      console.log(results[1]);
    }

    async function getTopMovies() {
      // top filmes
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovies(results);
      console.log(results);
    }

    async function getTopSeries() {
      // top filmes
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      setTopSeries(results);
      console.log(results);
    }

    async function getPersonPopular() {
      // top filmes
      const {
        data: { results },
      } = await api.get("/person/popular");

      setPersonPopular(results);
      console.log(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPersonPopular();
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

      {topMovies && <Slider info={topMovies} title={"Top Filmes"}></Slider>}

      {topSeries && <Slider info={topSeries} title={"Top Séries"}></Slider>}

      {personPopular && (
        <Slider info={personPopular} title={"Artistas Populares"}></Slider>
      )}
    </>
  );
}
