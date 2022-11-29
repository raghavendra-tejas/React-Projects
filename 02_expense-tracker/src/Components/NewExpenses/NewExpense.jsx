import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const enteredData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(enteredData);
    props.onAddNewExpense(enteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
