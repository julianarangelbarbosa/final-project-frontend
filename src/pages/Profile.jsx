//import React from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";
//import { useState, useEffect} from "react";

/*function Profile() {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/profile`,
          );
          setUser(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="LoginPage">
      <h1>Profile</h1>

     <form>
        <label>Username:</label>
        <input type="text" name="username" value={username}/>
      
         <label>Email:</label>
        <input type="text" name="email" value={email}/>
     </form>
        
      <Link to={"/"}> <button>
      <p>Go to HomePage</p> </button>
      </Link>
    </div>
  );
}

export default Profile;*/
