import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/User/User.css";
const UserMenu = () => {
  return (
    <>
      <div className="list-group UserlistGroup">
        <h4>Dashboard</h4>
        <hr />
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action UserlistGroup"
        >Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action UserlistGroup"
        >
         Orders
        </NavLink>
      
      </div>
    </>
  );
};

export default UserMenu;
