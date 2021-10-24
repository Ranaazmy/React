import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import React from "react";
import ExpensesFilter from "./ExpenseFilter";


function Expenses(props) {
    function optionSave(selectedYear){
        console.log('In Expenses Js');
        console.log(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onOptionSave ={optionSave}/>
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;
