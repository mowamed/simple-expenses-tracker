import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState, useEffect} from "react";
import {IExpenseItem} from "./models/ExpenseItem";

function App() {
    const [expenses, setExpenses] = useState([] as IExpenseItem[]);
    useEffect(() => {
        ( () => {
            const defaultExpenses: any = [
                {
                    id: 'e1',
                    title: 'Toilet Paper',
                    amount: 94.12,
                    date: new Date(2020, 7, 14),
                },
                {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
                {
                    id: 'e3',
                    title: 'Car Insurance',
                    amount: 294.67,
                    date: new Date(2021, 2, 28),
                },
                {
                    id: 'e4',
                    title: 'New Desk (Wooden)',
                    amount: 450,
                    date: new Date(2021, 5, 12),
                },
            ];
            setExpenses(defaultExpenses)
        })();
    }, []);



    const addNewExpenseHandler = (expense: IExpenseItem) => {
        setExpenses((previousState) => [
            expense,
            ...previousState
        ])
    }

    return (
        <div>
            <NewExpense onAddNewExpense={addNewExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
