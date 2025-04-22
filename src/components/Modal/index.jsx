import { getMovieVideos } from "../../services/getData.js";
import { Container, Background } from "./styles.js";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Modal = ({ movieId, setShowModal }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const videos = await getMovieVideos(movieId);
      setMovie(videos[0]);
    }

    getMovies();
  }, [movieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      <div className="close-modal">
        <button onClick={() => setShowModal(false)}>
          <IoClose size={30} />
        </button>
      </div>
      {movie && (
        <Container>
          <iframe
            src={`https://youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height={500}
            width="100%"
            allowFullScreen
          ></iframe>
        </Container>
      )}
    </Background>
  );
};

export default Modal;
