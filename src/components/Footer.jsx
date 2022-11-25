import React from "react";

/* Import Your Files Below This Line*/
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <p>© 2022 Ironhack. All Rights Reserved</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
height: 5vh;
background-color: #676fa3;
display: flex;
align-items: center;

p{
  color: white;
  margin-left: 1vh;
}
`;

export default Footer;
