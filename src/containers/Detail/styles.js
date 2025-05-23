import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: -100px;
  gap: 25px;
  padding: 0 2rem;

  @media (max-width: 600px) {
    gap: 0;
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #000, rgba(0, 0, 0, 0.5));
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  z-index: 98;
  width: 100%;

  .info-txt {
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-width: 1000px;

    h2 {
      font-size: 2rem;
    }

    .genres-container {
      display: flex;
      gap: 5px;

      .genre-box {
        padding: 5px 15px;
        border: 1px solid #fff;
        border-radius: 50px;
        background-color: rgba(256, 256, 256, 0.1);

        p {
          font-size: 0.9rem;
        }
      }
    }

    .movie-overview {
      p {
        font-size: 1rem;
        color: rgba(256, 256, 256, 0.9);
        margin-top: 10px;
      }
    }
  }

  img {
    width: 200px;
    border-radius: 12px;
  }

  .mySwiper {
    width: 100%;
    overflow: hidden;
  }

  .swiper-slide {
    margin-right: 0;
    height: auto;
    width: auto;
    text-align: center;

    p {
      margin-top: 5px;
    }
  }

  .credits {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 1000px;

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  padding: 0 200px;

  .video-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    text-align: center;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    iframe {
      border-radius: 12px;
      border: none;
      box-shadow: 0 0 5px #ff0000;
      transition: 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 0 15px #ff0000;
      }
    }
  }
`;
