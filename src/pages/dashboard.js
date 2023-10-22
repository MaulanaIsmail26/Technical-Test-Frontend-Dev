/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/dashboard.css";
import { Link } from "react-router-dom";

import CardExpenses from "../components/molecules/card-Expenses";

export default function Dashboard() {
  return (
    <div id="dashboard">
      <div className="container-fluid">
        <div className="row m-0">
          {/* SIDE BAR */}
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

          {/* MAIN CONTENT */}
          <main className="col-9 mainContent">
            <div className="row">
              <div className="col-7 leftSide">
                {/* ALL EXPENSES CARD */}
                <div className="AllExpensesCard">
                  {/* HEADER */}
                  <div className="header d-flex justify-content-between align-items-center">
                    {/* TITLE */}
                    <p className="title">All Expenses</p>

                    {/* MONTHLY DROPDOWN  */}
                    <div className="btn-group monthly-dropdown dropdown-center">
                      <button
                        type="button"
                        className="btn btn-dropdown dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Monthly
                      </button>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">January</li>
                        <li className="dropdown-item">February</li>
                        <li className="dropdown-item">March</li>
                        <li className="dropdown-item">April</li>
                        <li className="dropdown-item">May</li>
                        <li className="dropdown-item">June</li>
                        <li className="dropdown-item">July</li>
                        <li className="dropdown-item">August</li>
                        <li className="dropdown-item">September</li>
                        <li className="dropdown-item">October</li>
                        <li className="dropdown-item">November</li>
                        <li className="dropdown-item">December</li>
                      </ul>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="row content">
                    <div className="col-4">
                      <CardExpenses
                        icon={
                          "https://res.cloudinary.com/duflagksy/image/upload/v1697961187/balance-icon_pwa7xa.webp"
                        }
                        title="Balance"
                        date="April 2022"
                        nominal="$20,129"
                      />
                    </div>
                    <div className="col-4">
                      <CardExpenses
                        icon={
                          "https://res.cloudinary.com/duflagksy/image/upload/v1697961429/income-icon_cmqanx.webp"
                        }
                        title="Income"
                        date="April 2022"
                        nominal="$20,129"
                      />
                    </div>
                    <div className="col-4">
                      <CardExpenses
                        icon={
                          "https://res.cloudinary.com/duflagksy/image/upload/v1697961429/expenses-icon_nlpvre.webp"
                        }
                        title="Expenses"
                        date="April 2022"
                        nominal="$20,129"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
