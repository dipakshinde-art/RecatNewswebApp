//import { Drawer } from "@material-ui/core";
import React from "react";
import "./NavBar.css";
import Drawer from './Drawer'

const NavBar = ({setCategory}) => {
  return (
    <div className="nav">
      <div className="menu">
          <Drawer setCategory={setCategory}/>
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavBar;
