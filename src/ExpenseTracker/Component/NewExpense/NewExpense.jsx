import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm/ExpenseForm.jsx'

const NewExpense = (props) => {

  const [edit, setEdit] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const editingHandler = () =>{
    setEdit(true)
  }

  const cancelHandler = () =>{
    setEdit(false)
  }

  let addNewExpenses = <button onClick={editingHandler}> Add New Expenses </button>

  if(edit === true){
    addNewExpenses = <ExpenseForm onCancel = {cancelHandler} onSaveExpenseData = {saveExpenseDataHandler} />
  }
    
  return (
    <div className="new-expense">
    {
      addNewExpenses
    }
    </div>);
};

export default NewExpense;
