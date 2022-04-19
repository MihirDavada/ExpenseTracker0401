import React , { useState } from "react";
import Cards from "../Cards/Cards";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter.jsx";
import ExpensesList from "./ExpenseList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedFilteredYear) => {
    setFilteredYear(selectedFilteredYear)
  }

  const filteredExpenses = props.items.filter( (itemArray) => {
    if(itemArray.date.getFullYear().toString() === filteredYear)
    {
      return true
    }
    else{
      return false
    }
  })
  
  return (
    <>
      <Cards className="expenses">
        <ExpenseFilter filteredYear = {filteredYear} onFilterChange = {filterChangeHandler}/>
        <ExpensesChart filteredExpenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Cards>
    </>
  );
};

export default Expenses;
