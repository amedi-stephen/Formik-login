import styled from "styled-components"
import background from "./../assets/bangkit-prayogi-raWvr_iLyrM-unsplash.jpg";
import {Link} from "react-router-dom";

export const colors = {
    primary: "#fff",
    theme: "#be185d",
    light1: "#f3f4f6",
    light2: "#e5e7eb",
    dark1: "#29371f",
    dark2: "#4b5563",
    dark3: "#9ca3af",
    red: "#dc2626"
}

// default style components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;

export const StyledTitle = styled.h1`
    color: red;
    font-style: italic;
    font-size: ${(props) => props.size}px;
`;

export const StyledSubTitle = styled.h3`
    color: ${(props) => props.color ? props.color : colors.primary};
    font-size: ${(props) => props.size}px;
    text-align: center;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
`;