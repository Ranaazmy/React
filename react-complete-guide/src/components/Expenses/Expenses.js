import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import React from "react";
import ExpensesFilter from "./ExpenseFilter";


function Expenses(props) {
    function optionSave(selectedYear) {
        console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
    // return expense.date.getFullYear().toString()
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onOptionSave={optionSave}/>
                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
