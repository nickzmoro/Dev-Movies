import api from "../../services/api.js";
import { Container, Background } from "./styles.js";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Modal = ({ movieId, setShowModal }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      // filme popular
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`);

      setMovie(results[0]);
      console.log(results[0]);
    }

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          ></iframe>
        </Container>
      )}
    </Background>
  );
};

export default Modal;
