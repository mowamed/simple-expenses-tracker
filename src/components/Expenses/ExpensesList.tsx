import React from 'react';
import {IExpenseItem} from "../../models/ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props: any) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense: IExpenseItem) =>
            (<ExpenseItem key={expense.id} expense={expense}/>)
            )}
        </ul>
    );
};

export default ExpensesList;
