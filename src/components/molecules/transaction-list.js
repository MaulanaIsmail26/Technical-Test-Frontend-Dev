import React from 'react'

export default function TransactionList(props) {
  const { username, email } = props;

  return (
    <li>
      <div className="row card">
        <div className="col-4 p-0">
          <img
            src={require("./../../asset/icons/Frame-2.webp")}
            alt="icon"
          />
        </div>
        <div
          className="col-8 ps-0 d-flex align-items-center"
          style={{ height: "100%" }}
        >
          <div>
            <p className="username">{username}</p>
            <p className="email">{email}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
