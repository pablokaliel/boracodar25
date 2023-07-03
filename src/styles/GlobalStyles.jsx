import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width:100%;
    height:100%;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.75); 
    color:#fff;
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family:Inter;
  }

  button {
    cursor:pointer;
  }
`;
