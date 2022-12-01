import React from "react";

/* Import Your Files Below This Line*/
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <p>© 2022. All Rights Reserved. WebDev: Juliana Barbosa</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
height: 5vh;
background-color: #0e76a8;
display: flex;
align-items: center;
bottom: 0;
position: fixed;
width: 100%;
text-align: center;

p{
  color: white;
  margin-left: 1vh;
}
`;

export default Footer;
