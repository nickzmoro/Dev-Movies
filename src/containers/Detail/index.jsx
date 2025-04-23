import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
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
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)}></img>
            </Cover>
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
                <div className="card-container">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {movieCredits.cast.map((item) => (
                      <SwiperSlide key={item.id} className="swiper-slide">
                        <img
                          src={getImages(item.profile_path)}
                          alt={item.name}
                        />
                        <p>{item.name}</p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
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
            <Slider
              info={movieSimilar}
              title={"Filmes similares"}
              slidesPerView={5}
            ></Slider>
          )}
        </>
      )}
    </>
  );
}
