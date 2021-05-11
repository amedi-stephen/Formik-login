import React from "react";
import { Link } from "react-router-dom";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
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
      <StyledButton to="/login">
        Log in
      </StyledButton>
    </div>
  );
};

export default Home;
