import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";

import "../css/Navbar.css";

const Navbar = () => {
const [mobile,setMobile]=useState(false);
  return (
    <header>
      <nav>
        <h2 className="brand">
          <Link className="link" to={"/"}>
            Travel.
          </Link>
        </h2>
        <ul className={mobile?"navListActive":'navList'}>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/package"}>
              Package
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/shop"}>
              Shop
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/pages"}>
              Pages
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/News"}>
              News
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <button className="btn">
            <Link className="link-btn" to={"#"}>
              Book Now
            </Link>
          </button>
        </ul>
        <div
          className="icons"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? (
            <CgClose className="close" />
          ) : (
            <CgMenuGridO className="open" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
