import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Row, Card, Col, Button } from "antd";

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
      <Link to={`/bank/create/`}> Create a New Bank Folder</Link>
      <Row>
        {bank &&
          bank.map((banks) => (
            <Card>
              <li className="Bank Card" key={bank._id}>
                <h3>{banks.name_bank}</h3>
                <h4>
                  <p>Description:{banks.description_bank}</p>
                  <p>Rate:{banks.rate_bank}</p>
                  <p>Site:{banks.site_bank}</p>
                  <p>YouTube:{banks.youtube_bank}</p>
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
