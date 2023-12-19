import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=>{
    const [titleEntered,setEnteredTitle]=useState('');
    const [amountEntered,setEnteredAmount]=useState('');
    const [dateEntered,setEnteredDate]=useState('');
    //below uses one state concept
    // const[userInput,setUserInput] = useState({
    // enteredTitle:'',
    // enteredAmount:'',
    // enteredDate:'',
    // });

    const titleChanger=(event)=>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        // ...userInput,
        // enteredTitle:event.target.value,
    // })
    //use below if we use one state for 3 states
//     setUserInput((prevState)=>{
//     return{...prevState,enteredTitle:event.target.value};})
}
    const amountChanger=(event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // })

    }
    const dateChanger=(event)=>{
setEnteredDate(event.target.value)
// setUserInput({
//     ...userInput,
//     enteredDate:event.target.value,
// })
    }
    const submitHandler=(event)=>{
event.preventDefault();
const expenseData={
    title:titleEntered,
    amount:amountEntered,
    date:dateEntered,
};
console.log(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChanger}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='text' min='0.01' max='0.01' onChange={amountChanger}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-01-01' onChange={dateChanger}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;