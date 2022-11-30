import React, { useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "../contexts/auth.context";

function Profile() {
  const { user, logoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

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
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <div className="ProfilePage">
      <h2>Profile</h2>
      {profile && (
        <>
          <h3>Hi, {profile.username}</h3>
          <h3>Email: {profile.email}</h3>
          <h3>Comments:</h3>
          {profile.comments.map((comment) =>{
            return(
              <div>
              {comment.bankStockId && comment.bankStockId.name_bank && <p>{comment.bankStockId.name_bank}</p>}
              {comment.bankStockId &&  comment.bankStockId.stock && <p>{comment.bankStockId.stock}</p>}
              <p>{comment.description_comment}</p>
              </div>
            )
          })}
        </>
      )}
      {/* <form>
        <label>Username:</label>
        <input type="text" name="username" value={username} />

        <label>Email:</label>
        <input type="text" name="email" value={email} />
      </form> */}

      <Link to={"/"}>
        {" "}
        <button>HomePage</button>
      </Link>

      <p></p>
      <Link to={"/"}>
        {" "}
        <button>Edit Profile</button>
      </Link>

      <p></p>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Profile;
