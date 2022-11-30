import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, Button } from "antd";

function StockCreate() {
  const [name, setName] = useState("");
  const [close, setClose] = useState("");
  const [change, setChange] = useState("");
  const [sector, setSector] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleClose = (e) => setClose(e.target.value);
  const handleChange = (e) => setChange(e.target.value);
  const handleSector = (e) => setSector(e.target.value);

  const getStock = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/stock/list/${id}`
      );

      // response.data = {title, description}
      setName(response.data.stock);
      setClose(response.data.close);
      setChange(response.data.change);
      setSector(response.data.sector);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStock();
    // If we were able to go from one details view straight to another we should pass id on the de
    // dependency array, so that everytime the component rerenders we get the information from the correct/latest id
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/stock/create`, {
        stock: name, close, change, sector
      });

      // clear the inputs
      setName("");
      setClose("");
      setChange("");
      setSector("");

      // redirect to the details view
      navigate(`/stock/list`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStock = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/stock/list/${id}`);
      navigate("/stock/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SignupPage">
      <h2>Include Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Stock name: </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <p>
          <label htmlFor="close">Close rate: </label>
          <input
            type="number"
            name="close"
            value={close}
            onChange={handleClose}
          />
        </p>

        <p>
          <label htmlFor="sector">Company Sector: </label>
          <input
            type="text"
            name="sector"
            value={sector}
            onChange={handleSector}
          />
        </p>
        <button type="submit">Add Information</button>
      </form>
    </div>
  );
}

export default StockCreate;
