import React from "react";
import stock from "../assets/stock1.png";
import stock1 from "../assets/stock3.png";
import news from "../assets/news.jpg";
import bank from "../assets/bank_list.jpg";
/* Import Your Files Below This Line*/
/* Import Your Files Below This Line*/
import { StyledSection } from "../components/styled/Section.styled";

function HomePage() {
  return (
    
    <StyledSection>
      <div>
        <img className="image1" src={news} alt="Result Preview" />
        <h2>News aaaaaa</h2>
      </div>
      <div>
        <img className="image2" src={bank} alt="Result Preview" />
        <h2>Bank List aaaaaa</h2>
      </div>
      <div>
        <img className="image3" src={stock1} alt="Result Preview" />
        <h2>Broker List aaaaaa</h2>
      </div>
    </StyledSection>
  );
}

export default HomePage;
