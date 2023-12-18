import React from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=>{
    
    const titleChanger=(event)=>{
        console.log(event);
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChanger}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='text' min='0.01' max='0.01'></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-01-01'></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;