import React, {useState} from 'react';
import './ExpenseFilter.css';


function ExpensesFilter(props) {
    const [enteredOption, setEnteredOption] = useState('2020');
    function optionChangeHandler(event) {
        setEnteredOption(event.target.value);
    }
    props.onOptionSave(enteredOption);
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={enteredOption} onChange={optionChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;