import { styled, css } from "styled-components";

const blurBg = css`
  backdrop-filter: blur(5px);
`;

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;

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

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  h2 {
    font-size: 2.5rem;
  }

  .content {
    display: flex;
    align-items: flex-start;
    gap: 50px;
  }

  .title-page {
    padding-bottom: 15px;
    border-bottom: 2px solid rgba(255, 0, 0, 0.64);
    width: fit-content;
  }

  .popularity-number {
    font-size: 0.9rem;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
  }

  .overview {
    max-width: 500px;
    color: rgba(255, 255, 255, 0.9);
  }

  img {
    width: 300px;
    border-radius: 12px;
  }

  .details {
    width: 100%;
    height: 345px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .info-util {
      display: flex;
      gap: 5px;

      span {
        border-radius: 5px;
        padding: 5px 10px;
        background: rgba(255, 0, 0, 0.3);
        color: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: fit-content;
        ${blurBg}
      }

      p {
        border-radius: 5px;
        padding: 5px 10px;
        background: rgba(255, 0, 0, 0.2);
        color: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.2);
        width: fit-content;
        ${blurBg}
      }
    }
  }
`;
