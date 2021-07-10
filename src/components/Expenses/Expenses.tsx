import {IExpenseItem} from "../../models/ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props: any) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterSelectedHandler = (event: any) => {
        setSelectedYear(event.target.value);
    }

    const filteredExpenses = props.items.filter((expense: IExpenseItem) => new Date(expense.date).getFullYear().toString() === selectedYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selectYear={selectedYear} onFilterSelect={filterSelectedHandler}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
