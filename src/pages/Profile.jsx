import React, { useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Row, Card, Col, Button } from "antd";

function Profile() {
  const { user, logoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const { id } = useParams();
  const storedToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(storedToken);
      setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const resp = axios.post(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`
      );
      setProfile(resp.data);
      logoutUser();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/comment/${id}/${profile._id}`
      );
      console.log(response);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="SignupPage">
      <h2>User Profile: Welcome 😀 !!!</h2>
      {profile && (
        <>
          <div>
            <h3>Hello: {profile.username}</h3>
            <p></p>
            <h3>Email: {profile.email}</h3>
            <p></p>
            <h3>Personal Comments:</h3>

            <Row className="comments">
              {profile.comments.map((comment) => {
                return (
                  <div key={comment._id}>
                    {comment.bankStockId && comment.bankStockId.name_bank && (
                      <h3>{comment.bankStockId.name_bank}</h3>
                    )}
                    {comment.bankStockId && comment.bankStockId.stock && (
                      <h3>{comment.bankStockId.stock}</h3>
                    )}
                    <p>{comment.description_comment}</p>
                    <button onClick={() => deleteComment(comment._id)}>
                      Delete Comment
                    </button>
                  </div>
                );
              })}
            </Row>
          </div>
        </>
      )}
      {/* <form>
        <label>Username:</label>
        <input type="text" name="username" value={username} />

        <label>Email:</label>
        <input type="text" name="email" value={email} />
      </form> */}
      <p></p>
      <p></p>
      <Link to={"/"}>
        {" "}
        <button>HomePage</button>
      </Link>
      <p></p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Profile;
