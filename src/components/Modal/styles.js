import { styled } from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      border-radius: 5px;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: #ff0000;
      }
    }
  }
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  border-radius: 12px;

  iframe {
    border: none;
    border-radius: 12px;
    box-shadow: 0 0 1em #141414;
  }
`;
