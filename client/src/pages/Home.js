import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  StyledButtonGroup,
} from "../components/Styles";

const Home = () => {
  return (
    <div>
      <StyledTitle>
        <h1>This is the Home page</h1>
      </StyledTitle>
      <StyledSubTitle size={100} color="blue">
        <h2>This is the sub title</h2>
      </StyledSubTitle>
      <StyledButtonGroup>
        <StyledButton to="/login">Log in</StyledButton>

        <StyledButton to="/login">Sign up</StyledButton>
      </StyledButtonGroup>
    </div>
  );
};

export default Home;
