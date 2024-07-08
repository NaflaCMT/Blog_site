import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { LiaBlogger } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="body">
      <div className="my_header">
        <div className="logo">
          <LiaBlogger size={30} />
          Blog
        </div>
        <div className="nav_item">
          <ul className="nav_item_lists">
            <li>
              <Link className="nav_item_list" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_item_list" to="/create">
                Create Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
