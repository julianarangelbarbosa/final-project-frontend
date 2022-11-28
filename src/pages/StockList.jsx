import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Row, Card, Col, Button } from "antd";

function StockList() {
  const [stock, setStock] = useState(null);
  const { id } = useParams();
  const storedToken = localStorage.getItem("authToken");
  const getfromAPIStock = async () => {
    try {
      const response = await axios.get(
        `https://brapi.dev/api/quote/list?sortBy=volume&sortOrder=desc&limit=10}/stock/list`, 
       {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setStock(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getfromAPIStock();
  }, []);

  return (
    <div>
      <Link to={`/stock/create/`}> Create a New Stock</Link>
      <Row>
        {stock &&
          stock.map((stocks) => (
            <Card>
              <li className="Stock Card" key={stock._id}>
                <h3>{stocks.stock}</h3>
                <h4>
                  <p>Rate Close in the current day:{stocks.close}</p>
                  <p>Value Change from the last day:{stocks.change}</p>
                  <p>Sector Stock Companhy:{stocks.sector}</p>
                  <Link to={`/comment/${stocks._id}`}>
                    <button> Add Comments</button>
                  </Link>
                </h4>
              </li>
            </Card>
          ))}
      </Row>
    </div>
  );
}

export default StockList;
