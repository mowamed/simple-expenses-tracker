import React from 'react';
import './ExpensesFilter.css'

const ExpensesFilter = (props: any) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="year">Select Filter</label>
                <select value={props.selectYear} onChange={props.onFilterSelect} id="year">
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
