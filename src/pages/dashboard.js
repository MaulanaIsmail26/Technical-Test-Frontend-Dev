/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="dashboard">
      <div className="container-fluid">
        <div className="row m-0">
          <aside className="col-3 sideBar">

            {/* PROFILE PICTURE */}
            <div className="picture d-flex align-items-center p-0">
              <img
                src={require("./../asset/icons/gallery.webp")}
                className="mx-auto d-block"
                alt="picture_icon"
              />
            </div>

            {/* USERNAME AND EMAIL ADDRESS */}
            <div className="profile">
              <div className="row m-xxl-0">
                <div className="col-sm-4 col-xxl-3 ps-3 pe-1 frame d-flex justify-content-center align-items-center">
                  <img
                    src={require("./../asset/icons/Frame.webp")}
                    alt="picture_icon"
                  />
                </div>
                <div className="col-8 ps-0 username d-flex align-items-center">
                  <div>
                    <p>Lekan Okeowo</p>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR MENU */}
            <div className="menu">
              <div className="dashboard">
                <div className="row">
                  <div className="col-2 pe-2 py-1 d-flex align-items-center">
                    <img
                      src={require("./../asset/icons/icon-menu.webp")}
                      className="mx-auto"
                      alt="picture_icon"
                    />
                  </div>
                  <div className="col-10 p-0 d-flex align-items-center">
                    <p>Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
            
          </aside>
        </div>
      </div>
    </div>
  );
}
