import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditBankStock() {
  const [comments, setComments] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleComments = (e) => setComments(e.target.value);

  const getBankStock = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/comment/${id}`
      );
      setComments(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBankStock();
    // If we were able to go from one details view straight to another we should pass id on the de
    // dependency array, so that everytime the component rerenders we get the information from the correct/latest id
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/comment/${id}`, {
        comments,
      });
      setComments("");
      navigate(`/bank/list`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBankStock = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/comment/${id}`);
      navigate("/bank/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditBankStock">
      <h3>Edit Bank or Stock</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comments">Comments</label>
        <textarea
          nam="comments"
          value={comments}
          cols="30"
          rows="10"
          onChange={handleComments}
        ></textarea>

        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}

export default EditBankStock;
