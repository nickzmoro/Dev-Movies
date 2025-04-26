import { Background, Container } from "./styles";
import { getImages } from "../../utils/getImages";
import PropTypes from "prop-types";

const PopularPage = ({
  titlePage,
  bgSrc,
  popularity,
  name,
  overview,
  age,
  releaseDate,
  imgPoster,
}) => {
  return (
    <>
      <Background img={getImages(bgSrc)}>
        <Container>
          <div className="content">
            <div>
              <div className="title-page">
                <h2>{titlePage}</h2>
                <p className="popularity-number">com + de {popularity} fãs</p>
              </div>
              <div className="details">
                <div>
                  <h4>{name}</h4>
                  {overview ? (
                    <p className="overview">{overview}</p>
                  ) : (
                    <p className="overview">Sem descrição.</p>
                  )}
                </div>
                <div className="info-util">
                  <span>
                    {age
                      ? "Para maiores de 18 anos"
                      : "Permitido para menores de idade"}
                  </span>
                  <p>Lançamento: {releaseDate}</p>
                </div>
              </div>
            </div>
            <div>
              <img src={getImages(imgPoster)} alt="" />
            </div>
          </div>
        </Container>
      </Background>
    </>
  );
};

PopularPage.propTypes = {
  titlePage: PropTypes.string.isRequired,
  bgSrc: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  overview: PropTypes.string,
  age: PropTypes.bool.isRequired,
  releaseDate: PropTypes.string.isRequired,
  imgPoster: PropTypes.string.isRequired,
};

export default PopularPage;
