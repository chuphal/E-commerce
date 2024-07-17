import React, { useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { firebaseAuth, useFirebase } from "../context/Firebase";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const navigate = useNavigate();
  const firebase = useFirebase();

  const handleLogout = async () => {
    await signOut(firebaseAuth);
    navigate("/login");
  };
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="/images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBagHandle />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>

        <Link className="action_container" onClick={handleLogout}>
          <MdLogout style={{ fontSize: "30px", marginLeft: "10px" }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
