import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
  });

  const titleChangeHandler = (event) =>{
    setUserInput( (preState)=>{
      return{...preState, enteredTitle:event.target.value  }
    })
  }
  const amountChangeHandler = (event) =>{
    setUserInput( (preState)=>{
      return{...preState, enteredAmount:event.target.value  }
    })
  }
  const dateChangeHandler = (event) =>{
    setUserInput( (preState)=>{
      return{...preState, enteredDate:event.target.value  }
    })
  }

  const submitHandler = (event) =>{
    event.preventDefault()
    const expenseData = {
      title:userInput.enteredTitle,
      amount:userInput.enteredAmount,
      date:new Date(userInput.enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    
    setUserInput({
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:'',
    })
  }

  const editingHandler = () =>{
    props.onCancel()

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={editingHandler}> Cancel </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
