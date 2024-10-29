import { Expense } from "../../types/types";
import React, { useState, useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { deleteExpense } from "../../utils/expense-utils"

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here
  const {expenses,setExpenses,budget,setBudget} = useContext(AppContext);

  const handleDeleteExpense = async (currentExpense: Expense) => {
    try {
      await deleteExpense(currentExpense.id);
      setExpenses(expenses => expenses.filter(expense => expense.id != currentExpense.id));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.description}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
