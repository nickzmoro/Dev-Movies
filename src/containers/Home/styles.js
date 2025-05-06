import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      #000 0%,
      rgba(1, 1, 1, 0) 80%,
      #000 100%
    );
    pointer-events: none;
  }
`;

// https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg
export const Poster = styled.div`
  background-image: url(${(props) => props.posterImg});
  width: 15vw;
  height: 40vh;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }

  &:after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: transparent;
    border: 1px solid rgba(256, 256, 256, 0.5);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }

  .home-int {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  h2 {
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    color: #ff0000;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    border-radius: 50px;

    &:before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ff0000;
      box-shadow: 0px 0px 10px #ff0000;
    }
  }

  h1 {
    font-size: 3.5rem;
    margin: 10px 0;
  }

  p {
    max-width: 500px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  border-top: 1px solid rgba(256, 256, 256, 0.5);
  padding-top: 10px;
`;
