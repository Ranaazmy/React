import React, {useState} from "react";
import '../NewExpense/NewExpense.css';
import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseData(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    function startEditingHandler()
    {
        setIsEditing(true);
    }
    function stopEditingHandler()
    {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancelEditing={stopEditingHandler} onSaveExpenseData={saveExpenseData}/>}
        </div>
    );
}

export default NewExpense;
