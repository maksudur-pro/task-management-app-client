import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="navbar bg-base-100 shadow-lg px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-3xl font-bold">
          Task Management
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          {user ? (
            <img
              title={user?.displayName}
              src={`${user?.photoURL}`}
              className="w-10 h-10 rounded-full"
              alt=""
            />
          ) : (
            <FaUserAlt></FaUserAlt>
          )}
        </button>
        {user && (
          <button className="mr-2 ml-2" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
