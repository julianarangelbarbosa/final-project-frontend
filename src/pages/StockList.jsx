import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Row, Card, Col, Button } from "antd";
import Search from "antd/es/transfer/search";

function StockList() {
  const [stocks, setStocks] = useState([]);
  /*   const storedToken = localStorage.getItem("authToken"); */
  const getfromAPIStock = async () => {
    try {
      const response = await axios.get(
        `https://brapi.dev/api/quote/list?sortBy=volume&sortOrder=desc&limit=10`
        /* {
          headers: { Authorization: `Bearer ${storedToken}` },
        } */
      );
      setStocks(response.data.stocks);
      console.log(response.data.stocks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getfromAPIStock();
  }, []);

  return (
    <div>
      <div className="CreatePage">
        <Link to={`/`}>
          <button> HomePage</button>
        </Link>
        <Link to={`/profile`}>
          <button>Profile</button>
        </Link>
        <p></p>
      </div>
      <Row className="list">
        {stocks.map((stock) => {
          return (
            <Card>
              <li>
                <img src={stock.logo} />
                <h4>
                  <p>Stock name: {stock.stock}</p>
                  <p>Close value in the last trading: R$ {stock.close}</p>
                  <p>Value change between trading sessions: % {stock.change}</p>
                  <p>Company Sector: {stock.sector}</p>
                </h4>
              </li>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}

export default StockList;
