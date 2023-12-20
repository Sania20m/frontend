// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
import React,{useState} from 'react';
function App() {
  // const expense = [
    const [expense, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Bathroom',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location: 'Living Room', },
   
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Insurance Company',

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Office Furniture Store',
    },
  ]);
  // const addExpenseHandler=expenses=>{
  //   console.log('In App.js');
  //   console.log(expenses);
  // }
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };


  return (
    <div >
      {/* {expense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location} // Pass the LocationOfExpenditure as props
        />
      ))} */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
// {/* <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}  location={expense[0].location}></ExpenseItem>
// <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}  location={expense[1].location}></ExpenseItem>
// <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}  location={expense[2].location}></ExpenseItem>
// <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}  location={expense[3].location}></ExpenseItem> */}
