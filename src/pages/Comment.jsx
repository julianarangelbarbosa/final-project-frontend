import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function EditBankStock() {
  const [comments, setComments] = useState("");
  const { user } = useContext(AuthContext);
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
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/comment/${id}/${user._id}`,
        {
          description_comment: comments,
        }
      );

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
    <div className="SignupPage">
      <h2>Comments: Bank and Stock</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comments">Comments: </label>
        <textarea
          nam="comments"
          value={comments}
          cols="20"
          rows="1"
          onChange={handleComments}
        ></textarea>
        <p></p>
        <button type="submit">Add Comments</button>
        <p></p>
        <Link to={"/"}>
          {" "}
          <button type="submit">Home Page </button>
        </Link>
      </form>
    </div>
  );
}

export default EditBankStock;
