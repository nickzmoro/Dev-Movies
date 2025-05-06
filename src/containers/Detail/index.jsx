import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Background, Info, ContainerMovies } from "./styles";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getVideos } from "../../utils/getVideos";
import { Slider } from "../../components/Slider";
import LoadingPage from "../../components/LoadingPage";

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
        setMovie(movie),
        setMovieVideos(videos),
        setMovieCredits(credits),
        setMovieSimilar(similar),
      ])
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Info>
              <div className="info-txt">
                <h2>{movie.title}</h2>
                <div className="genres-container">
                  {movie.genres.map((item) => (
                    <div key={item.id} className="genre-box">
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div className="movie-overview">
                  <p>{movie.overview}</p>
                </div>
              </div>
              <div className="credits">
                <h3>Créditos</h3>
                <Swiper
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  slidesPerView="auto"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    900: {
                      slidesPerView: 3,
                    },
                    1080: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {movieCredits.cast.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <img src={getImages(item.profile_path)} alt={item.name} />
                      <p>{item.name}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((movie) => (
                <div key={movie.id} className="video-container">
                  <h4>{movie.name}</h4>
                  <iframe
                    src={getVideos(movie.key)}
                    title="Youtube Video Player"
                    height={500}
                    width={750}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={"Filmes similares"}></Slider>
          )}
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
