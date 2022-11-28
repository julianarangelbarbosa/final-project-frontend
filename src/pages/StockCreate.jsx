import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, Button } from "antd";

function StockCreate() {
  const [stock, setStock] = useState("");
  const [close, setClose] = useState("");
  const [change, setChange] = useState("");
  const [sector, setSector] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleStock = (e) => setStock(e.target.value);
  const handleClose = (e) => setClose(e.target.value);
  const handleChange = (e) => setChange(e.target.value);
  const handleSector = (e) => setSector(e.target.value);

  const getStock = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/stock/list/${id}`
      );

      // response.data = {title, description}
      setStock(response.data.stock);
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
        stock: stock, close: close, change:change, sector: sector
      });

      // clear the inputs
      setStock("");
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
    <div className="EditSoftPage">
      <h3>Create Soft</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="stock">Name Stock</label>
        <input type="text" name="stock" value={stock} onChange={handleStock} />

        <p>
          <label htmlFor="close">Close rate</label>
          <input
            type="number"
            name="close"
            value={close}
            onChange={handleClose}
          />
        </p>

        <p>
          <label htmlFor="change">Change</label>
          <input
            type="text"
            name="change"
            value={change}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="sector">Sector</label>
          <input
            type="text"
            name="sector"
            value={sector}
            onChange={handleSector}
          />
        </p>
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
}

export default StockCreate;
