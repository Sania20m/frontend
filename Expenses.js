import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './Expensesfilter';
import React,{useState} from 'react'


function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent= <p>No expense found.</p>;
  if(filteredExpenses.length>0){
    expenseContent=  filteredExpenses.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      />
      ))
  }
  let messageContent = null;
  if (filteredExpenses.length === 1) {
    messageContent = <p>Only single expense here. Please add more...</p>;
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* {props.items.map(expense=> */}
      {/* {filteredExpenses.length===0&&<p>No expense found.</p>} */}
      {/* {filteredExpenses.length===0 ?(
       <p>No expenses found.</p> */}
       {/* {filteredExpenses.length>0 &&
      filteredExpenses.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}
      />
      )) }*/}
      {expenseContent}
      {messageContent}
    
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Expenses;