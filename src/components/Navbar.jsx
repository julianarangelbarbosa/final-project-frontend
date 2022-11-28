import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logomarca from "../assets/logo.jpg";
import "react-widgets/styles.css";
import { AuthContext } from "../contexts/auth.context";

import styled from "styled-components";

function NavBar() {
  /*   const {isLoggedIn, user} = useContext(AuthContext) */

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

        <h2 className="active">InfoMoney</h2>
      </ul>

      <Link to="/signup">
        <button className="active2">
          <h4>Sign up</h4>
        </button>
      </Link>

      <Link to="/login">
        <button className="active2">
          <h4>Login</h4>
        </button>
      </Link>


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
    display: flex;
    flex-direction: center;
    flex-wrap: center;
    align-items: center;
    align-content: center;
    margin-right: -121vh;
    margin-left: 130vh;
    cursor: pointer;
    border-radius: 30px;
    border-style: none;
  }
`;

export default NavBar;
