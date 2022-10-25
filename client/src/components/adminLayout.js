import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../layout.css";

function adminLayout(props) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  const location = useLocation();
  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Users",
      path: "/admin/users",
    },
    {
      name: "Applications",
      path: "/admin/applications",
    },
    // {
    //   name: "Slots",
    //   path: "/admin/slots",
    // },
  ];

  const menuToBeRendered = adminMenu;

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h4 className="logo ms-4 mt-3">ADMIN</h4>
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="content">
          <div className="header">
            <div className="d-flex ms-auto px-4">
              <a onClick={logout} className="btn btn-dark">Logout</a>
            </div>
          </div>
          {location.pathname === "/admin" && (
            <div>
              <h2 className="mt-3">Booked Lists</h2>
              <div className="body">{props.bookedTable}</div>
              <h2 className="mt-3">Approved Lists</h2>
              <div className="body">{props.approvedTable}</div>
              <h2 className="mt-3">Submitted Lists</h2>
              <div className="body">{props.submittedTable}</div>
            </div>
          )}
          {location.pathname === "/admin/slots" && 
          <div className="body">
            <div className="row">
            {props.buttons}
            </div>
          </div>}

          {location.pathname === "/admin/users" && (
            <div>
              <h2 className="text-center">Users</h2>
              <div className="body">{props.userTable}</div>
            </div>
          )}
          {location.pathname === "/admin/applications" && (
            <div>
              <h2 className="text-center">Applications</h2>
              <div className="body">{props.appTable}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default adminLayout;
