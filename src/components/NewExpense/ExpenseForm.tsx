import React, { SyntheticEvent, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props: any) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangedHandler = (e: any) => {
    setTitle(e.target.value);
  };

  const amountChangedHandler = (e: any) => {
    setAmount(e.target.value);
  };

  const dateChangedHandler = (e: any) => {
    setDate(e.target.value);
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const payload = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(payload);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelHandler = () => {
    props.onHideExpenseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input value={title} onChange={titleChangedHandler} type="text" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            value={amount}
            onChange={amountChangedHandler}
            type="number"
            min="0.1"
            step="0.1"
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            value={date}
            onChange={dateChangedHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
