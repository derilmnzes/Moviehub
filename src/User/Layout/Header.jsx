import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "../Components/Drawer";

const Header = () => {
    const [ToggleDrawer,setToggle] = useState(false)

    const handleToggleDrawer = () => {
        setToggle(!ToggleDrawer)
    }
  return (
      <>
    <div className="header">
      <div className="header__container">
        <div className="header__toggle">
          <div className="menubar">
            <FontAwesomeIcon onClick={handleToggleDrawer} icon={faBars} />
          </div>
          <div className="logo">
            <h1>Logo</h1>
          </div>
        </div>
        <div className="header__nav_link">
          <ul className="nav">
            <li className="link">Home</li>
            <li className="link">
              Movies <FontAwesomeIcon  icon={faAngleDown} />{" "}
            </li>
            <li className="link">
              Tv Shows <FontAwesomeIcon icon={faAngleDown} />
            </li>
          </ul>
        </div>
        <div className="header__search_bar">
          <input type="text" placeholder="Search movies.." />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

    </div>
   {ToggleDrawer ?  <Drawer handleClose={handleToggleDrawer}>
   <div className="header__mob_link">
          <ul className="nav">
            <li className="link">Home</li>
            <li className="link">
              Movies <FontAwesomeIcon  icon={faAngleDown} />{" "}
            </li>
            <li className="link">
              Tv Shows <FontAwesomeIcon icon={faAngleDown} />
            </li>
          </ul>
        </div>
</Drawer> : null}
    </>
  );
};

export default Header;
