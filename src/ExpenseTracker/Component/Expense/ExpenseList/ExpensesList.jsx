import React from "react";
import ExpenseItem from "../../ExpenseItem/ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {

  let expensesContent = <h1 className="expenses-list__fallback"> No Expenses Found </h1>;

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((val) => {
      return (
        <ExpenseItem
          key={val.id}
          title={val.title}
          amount={val.amount}
          date={val.date}
        />
      );
    });
  }

  return <ul className="expenses-list">
    {
        expensesContent
    }
  </ul>;
};

export default ExpensesList;
