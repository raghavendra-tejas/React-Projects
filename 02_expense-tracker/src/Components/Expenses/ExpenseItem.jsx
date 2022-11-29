import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "numeric" });
  const year = props.date.toLocaleString("en-us", { year: "numeric" });

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("new one");
  };

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Here</button>
    </div>
  );
};

export default ExpenseItem;
