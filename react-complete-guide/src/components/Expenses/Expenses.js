import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import React from "react";
import ExpensesFilter from "./ExpenseFilter";


function Expenses(props) {
    function optionSave(selectedYear) {
        console.log('In Expenses Js');
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onOptionSave={optionSave}/>
                {props.items.map(expense => (
                    <ExpenseItem
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
