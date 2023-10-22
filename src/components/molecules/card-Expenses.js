import React from 'react'
import { SlArrowRight } from "react-icons/sl";

export default function cardExpenses(props) {
  const { icon, title, date, nominal } = props;

  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <img
            src={icon}
            alt="icon"
          />
          <h6>
            <SlArrowRight />
          </h6>
        </div>
        <div className="card-content">
          <p>{title}</p>
          <p>{date}</p>
          <h4>{nominal}</h4>
        </div>
      </div>
    </div>
  );
}
