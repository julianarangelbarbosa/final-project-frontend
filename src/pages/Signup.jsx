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
      <h2>Signup</h2>

      <form onSubmit={handleSignupSubmit}>
        <label>Username:  </label>
        <input type="username" name="username" placeholder="aaa" value={username} onChange={handleUsername}/>
        
        <p></p>
        <label>Email:  </label>
        <input type="email" name="email" placeholder="a@email.com" value={email} onChange={handleEmail} />

        <p></p>
        <label>Password:  </label>
        <input type="password" name="password" placeholder="*******" value={password} onChange={handlePassword}/>

        <p></p>
        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
     
      <p></p>
        <Link to={"/login"}>
          {" "}
          <button type="submit">Login</button>
        </Link>

    
    </div>
  );
}

export default Signup;
