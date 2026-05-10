import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, signOutuser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutuser().then((result) => {
      alert("LogOut successfully");
    });
  };
  return (
    <div className="grid grid-cols-3 items-center pt-5">
      <div className="">{user && user.email}</div>
      <div className="nav flex justify-center gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 justify-end">
        <img
          className="w-12"
          src={`${user?.photoURL || userIcon}`}
          alt="User"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
