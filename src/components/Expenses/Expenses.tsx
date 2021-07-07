import ExpenseItem from "./ExpenseItem";
import {IExpenseItem} from "../../models/ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

const Expenses = (props: any) => {
    return (
        <Card className="expenses">
            {props.items.map((expense: IExpenseItem) => {
                return (
                    <ExpenseItem key={expense.id} expense={expense}/>
                )
            })}
        </Card>
    );
};

export default Expenses;
