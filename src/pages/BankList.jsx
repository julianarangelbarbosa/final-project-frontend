import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Row, Card, Col, Button } from "antd";
import Search from "antd/es/transfer/search";

function BankList() {
  const [bank, setBank] = useState(null);
  const { id } = useParams();
  const storedToken = localStorage.getItem("authToken");
  const getBank = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/bank/list`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setBank(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBank();
  }, []);

  

  return (
    <div>
     <h3>Visualize the Tradicional and Digital Bank in Brazil. </h3>
     <h3>Choose it Bank help you to manage your earnings!!!</h3>
     
      <div className="CreatePage">
      <p></p>
      <Link to={`/bank/create/`}>
        {" "}
        <button> Include Information</button>
      </Link>
      <Link to={`/`}>
        {" "}
        <button> HomePage</button>
      </Link>
      <p></p>
      <Link to={`/profile`}>
        {" "}
        <button>Profile</button>
      </Link>
      <p></p>
      <Search className="begin"></Search>
      </div>
    
      <Row className="list">
        {bank &&
          bank.map((banks) => (
            <Card>
              <li className="Bank Card" key={bank._id}>
                <img src={banks.logo_bank} width="50%"/> 
                <h3>{banks.name_bank}</h3>
                <h4>
                  <p>Description: {banks.description_bank}</p>
                  <p>Rate: {banks.rate_bank}</p>
                  <Link><p>{banks.site_bank}</p></Link>
                  <Link><p>{banks.youtube_bank}</p> </Link>
                  <Link to={`/comment/${banks._id}`}>
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

export default BankList;
