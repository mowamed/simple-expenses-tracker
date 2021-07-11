import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props: any) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseDataHandler = (expenseData: any) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expense);
    setShowExpenseForm(false);
  };

  const onHideExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };

  let expenseContent = (
    <div className="expense__actions">
      <button onClick={() => setShowExpenseForm(true)}>New Expense</button>
    </div>
  );

  if (showExpenseForm) {
    expenseContent = (
      <ExpenseForm
        onHideExpenseForm={onHideExpenseFormHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{expenseContent}</div>;
};

export default NewExpense;
