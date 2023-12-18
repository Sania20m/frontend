import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props) {
    // const expenseDate=new Date(2023, 12,14);
    // const expenseTitle='Car Insurance'
    // const expenseAmount=294.67

    // const month=props.date.toLocaleString('en-US',{month:'long'});
    // const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year=props.date.toLocaleString();
    const clickHandler=()=>{
        console.log('Clicked');
    }
    const deleteexpense=()=>{
        const ExpenseItem=document.querySelector('.expense-item');
        ExpenseItem.remove();
    }
    return (
        // <div className='expense-item'>
        //     <div>March 28th 2023</div>
        //     <div className='expense-item-description'>
        //         <h2>Car Insurance</h2>
        //         <div className='expense-item-price'>$294.67</div>
        //     </div>
        // </div>


<Card className='expense-item'>
<ExpenseDate date={props.date}></ExpenseDate>
            {/* <div>{props.date.toISOString()}</div> */}
            <div className='expense-item-description'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
                {/* <div className='expense-item-location'>Location: {props.location}</div> */}
                {/* <ExpenseDetails amount={props.amount}   title={props.title}/> */}
            </div>
            <div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteexpense}>Delete</button>
            </div>
        </Card>

    )
}
export default ExpenseItem;