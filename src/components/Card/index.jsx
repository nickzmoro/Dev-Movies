import { getImages } from "../../utils/getImages";
import { Container } from "../Card/style";
import PropTypes from "prop-types";

export function Card({ item }) {
  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || "")}
        alt="poster"
      />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
