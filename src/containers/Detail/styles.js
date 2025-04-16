import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
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

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 500px;
    border-radius: 12px;
  }
`;

export const Info = styled.div`
  z-index: 99;
`;
