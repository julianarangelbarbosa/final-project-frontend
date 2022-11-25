import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {useLocation } from "react-router-dom";

//import logo from 'assets/logo.jpg;'

/* Import Your Files Below This Line*/
import styled from "styled-components";

function NavBar() {
  /* Check Current Tab */
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <StyledNavBar>
      <ul>
      <h2 className="active">InfoMoney Site</h2>
      <button className="active2"> <h4>Brazil Finance</h4></button>
      <button className="active2"> <h4>Signup</h4> </button>
      <button className="active2"> <h4>Login</h4> </button>
      
      </ul>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
height: 15vh;  
background-color: white;
display: flex;
align-items: center;

ul{
  list-style: none;
  display: flex;
  align-items: center;
}

.active{
  color: black;
  font-size: xx-large;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  margin-left: 0px;

}



.active2{
  height: 5vh; 
  color: black;
  font-size: smaller;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
  margin-left: 180px;
  margin-right: 30px;
  cursor: pointer;
  border-radius:5px;
}

`;

export default NavBar;
