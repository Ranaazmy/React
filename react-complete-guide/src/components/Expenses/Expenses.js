import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import React, {useState} from 'react';
import ExpensesFilter from "./ExpenseFilter";


function Expenses(props) {
    const [enteredOption, setEnteredOption] = useState('2020');

    function optionSave(enteredOption) {
        setEnteredOption(enteredOption);
        console.log(enteredOption);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === enteredOption;
    });

    let expensesContent = <p>No Expenses Found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={enteredOption}
                                onOptionSave={optionSave}/>
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
