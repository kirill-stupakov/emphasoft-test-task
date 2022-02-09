import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import OutsideClickHandler from "react-outside-click-handler";
import { useSpring, animated } from "react-spring";

import { AuthContext } from "./AuthContext";
import LoginForm from "./LoginForm";

const FormWrapper = () => {
  const { setIsLoginShown } = useContext(AuthContext)!;
  const handleOutsideClick = () => setIsLoginShown(false);
  const containerProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const AnimatedContainer = animated(Container);

  return (
    <AnimatedContainer
      fluid
      className="form-bg vh-100 position-absolute bg-black bg-opacity-25 d-flex justify-content-center align-items-center"
      style={containerProps}
    >
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <LoginForm />
      </OutsideClickHandler>
    </AnimatedContainer>
  );
};

export default FormWrapper;
