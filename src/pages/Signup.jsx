import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      //try to create the user
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        email,
        password,
        username,
      });
      navigate("/");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="SignupPage">
      <h1>Signup</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Username:</label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have done the signup? If yes, go to:</p>
      <Link to="/login"> Login</Link>
    </div>
  );
}

export default Signup;
