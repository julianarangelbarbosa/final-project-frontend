import React from "react";
import stock from "../assets/stock1.png";
import stock1 from "../assets/stock3.png";
import news from "../assets/news.jpg";
import bank from "../assets/bank_list.jpg";
import {Link} from "react-router-dom";
/* Import Your Files Below This Line*/
/* Import Your Files Below This Line*/
import { StyledSection } from "../components/styled/Section.styled";

function HomePage() {
  return (
    
    <StyledSection>
      <div>
        <Link to={"/login"}>
        <img className="image1" src={news} alt="Result Preview" />
        </Link>
        <h2>News about Brazil Finance</h2>
      </div>
      <div>
        <Link to={"/bank/list"}>
         <img className="image2" src={bank} alt="Result Preview" />
         </Link>
        <h2>Analyse the Bank and Broker to manage your money</h2>
        
      </div>
      <div>
        <Link to={"/stock/list"}>
        <img className="image3" src={stock1} alt="Result Preview" />
        </Link>
        <h2>Analyse the Stock Exchange in Brazil</h2>
      </div>
    </StyledSection>
  );
}

export default HomePage;
