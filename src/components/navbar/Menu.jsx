import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./_navbar.module.css";
const Menu = () => {
  return (
    <div className={Styles.menu}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <NavLink
            to="/product-dashboard"
            className={({ isActive }) =>
              isActive ? `${Styles.active}` : "inactive"
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
