import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BankCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [site, setSite] = useState("");
  const [channel, setChannel] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleTitle = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

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
      await axios.put(`${process.env.REACT_APP_API_URL}/bank/list/${id}`, {
        name,
        description,
        rate,
        site,
        channel,
      });

      // clear the inputs
      setName("");
      setDescription("");
      setRate("");
      setSite("");
      setChannel("");

      // redirect to the details view
      navigate(`/bank/list/${id}`);
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
    <div className="EditBankPage">
      <h3>CreateBank</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleTitle} />

        <label htmlFor="description">Description</label>
        <textarea
          nam="description"
          value={description}
          cols="30"
          rows="10"
          onChange={handleDescription}
        ></textarea>

        <label htmlFor="rate">Rate</label>
        <input type="text" name="rate" value={rate} onChange={handleTitle} />

        <label htmlFor="site">Site</label>
        <input type="text" name="site" value={site} onChange={handleTitle} />

        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" value={channel} onChange={handleTitle} />
      
        <button type="submit">Add Bank</button>
      
      </form>

      {/*Delete the project*/}
      <button onClick={deleteBank}> Delete Bank</button>
    </div>
  );
}

export default BankCreate;
