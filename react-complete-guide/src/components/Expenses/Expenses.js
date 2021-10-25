import "../Expenses/Expenses.css";
import ExpensesList from "./ExpenseList";
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


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={enteredOption}
                                onOptionSave={optionSave}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;
