import React from "react";
//import previewImg from "../assets/fotobank1";
import stock1 from "../assets/stock1.png";

/* Import Your Files Below This Line*/
import {StyledSection} from '../components/styled/Section.styled'

function HomePage() {
  return (
    <StyledSection>
      <div>
        <img src="stock1"></img>
        <img src="stock2"></img>
        <img src="stock3"></img>
        <article>
          <h2>
          Find information about: Traditional Banks, Digital Banks and Broker in Brazil
          </h2>
        </article>
      </div>
    </StyledSection>
  );
}

export default HomePage;