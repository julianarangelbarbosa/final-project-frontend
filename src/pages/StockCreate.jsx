import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, Button } from "antd";

/*
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
       `${}/stock/list/${id}` // duvida
      );

      // response.data = {title, description}
      setStock(response.data.name);
      setClose(response.data.description);
      setChange(response.data.rate);
      setSector(response.data.site);

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
      /// duvida
      await axios.put(`${xxx}/stock/list/${id}`, {
        stock,
        close,
        change,
        sector,
      });

      // clear the inputs
      setStock("");
      setClose("");
      setChange("");
      setSector("");

      // redirect to the details view
      navigate(`/stock/list/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStock = async () => {
    try {
      await axios.delete(`${xxx}/stock/list/${id}`); /////
      navigate("/stock/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditStockPage">
      <h3>Create Stock</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleStock} />

        <p>
          <label htmlFor="close">Close</label>
          <input
            type="number"
            name="rate"
            value={rate}
            onChange={handleClose}
          />
        </p>

        <p>
          <label htmlFor="change">Change</label>
          <input
            type="number"
            name="number"
            value={number}
            onChange={setChange}
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
*/
     // {/*Delete the project*/}
  //    <button onClick={deleteBank}> Delete Stock</button>
  //  </div>
  //);
//}

// export default StockCreate;
