/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/dashboard.css";
import { Link } from "react-router-dom";

import CardExpenses from "../components/molecules/card-Expenses";
import TransactionList from "../components/molecules/transaction-list";
import TransactionListItem from "../components/molecules/transactionList-item";

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
              {/* LEFT SIDE */}
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

                {/* QUICK INVOICE SECTION */}
                <div className="quickInvoiceCard">
                  {/* HEADER */}
                  <div className="header d-flex justify-content-between align-items-center">
                    {/* TITLE */}
                    <p className="title">Quick Invoice</p>

                    {/* ADD */}
                    <img
                      src={require("./../asset/icons/add-icon.webp")}
                      alt="add-icon"
                    />
                  </div>

                  {/* LATEST TRANSACTION */}
                  <div className="latestTransaction">
                    <p className="title">Latest Transaction</p>
                    <div className="list">
                      <ul>
                        <TransactionList
                          username="Madrani Andi"
                          email="Madraniadi20@gmail"
                        />
                        <TransactionList
                          username="Josua Nunito"
                          email="Josh Nunito@gmail.com"
                        />
                        <TransactionList
                          username="Madrani Andi"
                          email="Madraniadi20@gmail"
                        />
                      </ul>
                    </div>
                  </div>

                  {/* MONEY SEND FORM */}
                  <div className="moneySendForm">
                    {/* FORM */}
                    <div className="row p-0">
                      <div className="col-6">
                        <label for="name" className="form-label">
                          Customer name
                        </label>
                        <input
                          type="text"
                          className="form-control input"
                          id="name"
                          placeholder="Type customer name"
                        />
                      </div>
                      <div className="col-6">
                        <label for="email" className="form-label">
                          Customer Email
                        </label>
                        <input
                          type="email"
                          className="form-control input"
                          id="email"
                          placeholder="Type customer email"
                        />
                      </div>
                    </div>
                    <div className="row p-0 m-0">
                      <div className="col-6">
                        <label for="item" className="form-label">
                          Item name
                        </label>
                        <input
                          type="text"
                          className="form-control input"
                          id="item"
                          placeholder="Type customer name"
                        />
                      </div>
                      <div className="col-6">
                        <label for="mount" className="form-label">
                          Item mount
                        </label>

                        <div className="input-group">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle btn-mount"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            USD
                          </button>
                          <ul className="dropdown-menu">
                            <li className="dropdown-item">USD</li>
                          </ul>
                          <input
                            type="text"
                            id="mount"
                            className="form-control input-mount"
                            aria-label="Text input with dropdown button"
                            placeholder="Type customer item mount"
                          />
                        </div>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div className="button d-flex justify-content-between">
                      <button type="button" className="btn btn-addMore">
                        Add more details
                      </button>
                      <button type="button" className="btn btn-send">
                        Send Money
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-5 rightSide">
                {/* MY CARD SECTION */}
                <div className="myCard">
                  <p className="title">My Card</p>
                  {/* USER CARD */}
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={require("./../asset/icons/user-card.webp")}
                          className="d-block w-100"
                          alt="user-card"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={require("./../asset/icons/user-card.webp")}
                          className="d-block w-100"
                          alt="user-card"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={require("./../asset/icons/user-card.webp")}
                          className="d-block w-100"
                          alt="user-card"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                  {/* TRANSACTION HISTORY */}
                  <div className="transactionHistory">
                    {/* HEADER */}
                    <div className="header d-flex justify-content-between align-items-center">
                      <p>Transaction History</p>
                      <button>See all</button>
                    </div>

                    {/* TRANSACTION LIST */}
                    <div className="transactionList">
                      <p className="date">13 April 2022</p>
                      <TransactionListItem
                        name="Cash Withdrawal"
                        date="13 Apr, 2022"
                        nominal="$20,129"
                      />
                      <TransactionListItem
                        name="Landing Page project"
                        date="13 Apr, 2022 at 3:30 PM"
                        nominal="$2,000"
                      />
                      <TransactionListItem
                        name="Juni Mobile App project"
                        date="13 Apr, 2022 at 3:30 PM"
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
      {/* STYLE FOR SCROLLBAR */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0em;
            height: 0em;
          }
          ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}
