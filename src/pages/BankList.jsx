import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Row, Card, Col, Button } from "antd";
import Search from "./Search";

function BankList() {
  const [bank, setBank] = useState(null);
  const { id } = useParams();
  const [showbank, setShowBank] = useState(null);

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
      setShowBank(response.data);
      /* console.log(response.data); */
    } catch (error) {
      console.log(error);
    }
  };

  const filterBank = (searchQuery) => {
    console.log(searchQuery);
    let filteredBank = bank.filter((singlebank) =>
      singlebank.name_bank.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowBank(filteredBank);
  };

  useEffect(() => {
    getBank();
  }, []);

  return (
    <div>
      {/* <Search className="begin"></Search> */}
     
      <div className="CreatePage">
      
        <Link to={`/bank/create/`}>
          <button> Include Information</button>
        </Link>
        <Link to={`/`}>
          <button> HomePage</button>
        </Link>
        <Link to={`/profile`}>
          <button>Profile</button>
        </Link>
        <Search filterBank={filterBank} />
      </div>

      <Row className="list">
        {bank &&
          showbank.map((banks) => (
            <Card>
              <li key={bank._id}>
                <img src={banks.logo_bank} width="50%" />
                <h3>{banks.name_bank}</h3>
                <h4>
                  <p>Description: {banks.description_bank}</p>
                  <p>Rate: {banks.rate_bank}</p>
                  <Link>
                    <p>{banks.site_bank}</p>
                  </Link>
                  <Link>
                    <p>{banks.youtube_bank}</p>{" "}
                  </Link>
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
