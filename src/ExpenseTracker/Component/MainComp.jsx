import React, { useState } from "react";
import Expenses from "./Expense/Expenses.jsx";
import dummyExpenses from './Data/Data.jsx';
import NewExpense from './NewExpense/NewExpense.jsx'

const MainComp = () => {

  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expenseData) =>{
    // console.log(expenseData)
    setExpenses((preExpenses) => {
      return [expenseData, ...preExpenses]
    })
  }
  return (
    <>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </>
  );
};

export default MainComp;
