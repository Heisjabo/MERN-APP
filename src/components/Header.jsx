import { Link } from "react-router-dom";
import React from "react";
import { useJwt } from "react-jwt";
import axios from "axios";

const Header = () => {
  const [isLogged, setIsLogged] = React.useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  });
  const [loggedUser, setLoggedUser] = React.useState([]);

  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));

  const fetchUser = async () => {
    try{
      const response = await axios.get(`https://blogapi-se2j.onrender.com/api/v1/users/${id}`);
      setLoggedUser(response.data);
      console.log(response)
    } catch(err){
      console.log(err)
    }
  }

  React.useEffect(() => {
    fetchUser();
  }, [])

  console.log(loggedUser);

  return (
    <div>
      <nav className="bg-slate-900 text-white flex justify-between items-center px-12 py-4">
        <h1 className="font-bold text-[22px]">
          <Link to="/">MERN APP</Link>
        </h1>
        {isLogged ? (
          <h2>name</h2>
        ) : (
          <ul className="flex items-center gap-4">
            <Link to="/login">
              <li>Sign In</li>
            </Link>
            <Link to="/register">
              <li>Sign Up</li>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
