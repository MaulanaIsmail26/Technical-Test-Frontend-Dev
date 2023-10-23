/* eslint-disable no-unused-vars */
import React from "react";

export default function TransactionListItem(props) {
  const { name, date, nominal, transactionType } = props;

  return (
    <div className="itemList d-flex justify-content-between align-items-center">
      <div className="information">
        <p className="name">{name}</p>
        <p className="date">{date}</p>
      </div>
      <p className={transactionType === "income" ? "nominal-income" : "nominal-expenses"}>{nominal}</p>
    </div>
  );
}
