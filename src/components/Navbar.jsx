import React from "react";
import { Link } from "react-router-dom";
import logomarca from "../assets/logo.jpg";
import "react-widgets/styles.css";

import styled from "styled-components";

function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <Link to={"/login"}>
          <img
            className="active"
            src={logomarca}
            alt="InfoMoney Logo"
            height="50vh"
          />
        </Link>

        <h2 className="active">Finance: Information on Social Media, Banks and Stock Exchange </h2>
        
        <button className="weather"> São Paulo 35°C / Lisbon 10°C</button>
        
      
      </ul>

    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  height: 12vh;
  background-color: #0e76a8;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .active {
    color: white;
    font-size: x-large;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: 5px;
  }

  .active2 {
    height: 5vh;
    width: 12vh;
    font-size: smaller;
    text-align: center;
    display: flex;
    flex-direction: center;
    flex-wrap: center;
    align-items: center;
    align-content: center;
    margin-right: -1vh;
    margin-left: 90vh;
    cursor: pointer;
    border-radius: 10px;
    border-style: none;
  }
`;

export default NavBar;
