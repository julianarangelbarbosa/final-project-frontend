import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };
      //try to create the user
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        body
      );

      //store the token that we get from the login request
      storeToken(response.data.authToken);

      //Validate the token
      authenticateUser();

      //redirect
      navigate("/");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="LoginPage">
      <h2>Login</h2>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:  </label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        
        <p></p>
        <label>Password:  </label>
        <input type="password" name="password" value={password} onChange={handlePassword}/>
        
        <p></p>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p></p>
        <Link to={"/"}> <button type="submit">HomePage </button></Link>
      
    </div>
  );
}

export default Login;
