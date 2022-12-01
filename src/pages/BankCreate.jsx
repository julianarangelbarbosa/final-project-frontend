import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, Button } from "antd";

function BankCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [site, setSite] = useState("");
  const [channel, setChannel] = useState("");
  const [logo, setLogo] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleTitle = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleRate = (e) => setRate(e.target.value);
  const handleSite = (e) => setSite(e.target.value);
  const handleChannel = (e) => setChannel(e.target.value);
  const handleLogo = (e) => setLogo(e.target.value);

  const getBank = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/bank/list/${id}`
      );

      // response.data = {title, description}
      setName(response.data.name);
      setDescription(response.data.description);
      setRate(response.data.rate);
      setSite(response.data.site);
      setChannel(response.data.channel);
      setLogo(response.data.logo);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBank();
    // If we were able to go from one details view straight to another we should pass id on the de
    // dependency array, so that everytime the component rerenders we get the information from the correct/latest id
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/bank/create`, {
        name_bank: name,
        description_bank: description,
        rate_bank: rate,
        site_bank: site,
        youtube_bank: channel,
        logo_bank: logo,
      });

      // clear the inputs
      setName("");
      setDescription("");
      setRate("");
      setSite("");
      setChannel("");
      setLogo("");

      // redirect to the details view
      navigate(`/bank/list`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBank = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/bank/list/${id}`);
      navigate("/bank/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SignupPage">
      <h2>Include Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleTitle} />

        <p>
          <label htmlFor="description">Description: </label>
          <input
            name="description"
            value={description}
            cols="30"
            rows="2"
            onChange={handleDescription}
          />
        </p>
         
        <button type="submit">Add Information</button>
      </form>

    </div>
  );
}

export default BankCreate;
