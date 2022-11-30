import React from "react";
import stock from "../assets/stock1.png";
import stock1 from "../assets/stock3.png";
import news from "../assets/news.jpg";
import bank from "../assets/bank_list.jpg";
import { Link } from "react-router-dom";
/* Import Your Files Below This Line*/
/* Import Your Files Below This Line*/
import { StyledSection } from "../components/styled/Section.styled";
import { Row, Card, Col, Button } from "antd";

function HomePage() {
  return (
    <div>
    <StyledSection>
    <Row>
    <Card>
        <Link to={"/bank/list"}>
          <img className="image2" src={bank} alt="Result Preview" />
        </Link>
        <h2>Bank and Broker</h2>
        </Card>
        <Card>
        <Link to={"/stock/list"}>
          <img className="image3" src={stock1} alt="Result Preview" />
        </Link>
        <h2>Stocks Exchange</h2>
        </Card>
        <Card>
        <Link to={"/news/list"}>
          <img className="image1" src={news} alt="Result Preview" />
        </Link>
        <h2>Videos to learn about Finance</h2>
        </Card>
        </Row>
    </StyledSection>
    </div>
    
  );
}

export default HomePage;
