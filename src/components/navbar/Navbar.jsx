import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user"); 
    navigate("/login"); 
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">AshuBooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="navUsername">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">
              <Link to="/login">Login</Link>
            </button>
            <button className="navButton">
              <Link to="/register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
