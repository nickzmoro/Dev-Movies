import { ButtonRed, ButtonWhite } from "./styles";

// eslint-disable-next-line react/prop-types
function Button({ children, red, ...rest }) {
  return (
    <>
      {red ? (
        <ButtonRed {...rest}>{children}</ButtonRed>
      ) : (
        <ButtonWhite {...rest}>{children}</ButtonWhite>
      )}
    </>
  );
}

export default Button;
