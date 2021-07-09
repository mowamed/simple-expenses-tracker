import React from 'react';
import  './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props: any) => {
    const saveExpenseDataHandler = (expenseData: any) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
