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

        <h2 className="active">
          Information: Banks and Stock Exchange in Brazil
        </h2>

       
      </ul>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
display: flex;
  height: 12vh;
  width: auto;
  background-color: #0e76a8;
  

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

  .weather {
    margin-left: 160px;
    margin-top: 10px;
    border-radius: 40px;
    border-color: grey;
    display: flex;
  }
`;

export default NavBar;
