import './ExpenseItem.css'
function ExpenseItem(props) {
    // const expenseDate=new Date(2023, 12,14);
    // const expenseTitle='Car Insurance'
    // const expenseAmount=294.67
    return (
        // <div className='expense-item'>
        //     <div>March 28th 2023</div>
        //     <div className='expense-item-description'>
        //         <h2>Car Insurance</h2>
        //         <div className='expense-item-price'>$294.67</div>
        //     </div>
        // </div>

        //v-12
<div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item-description'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
                <div className='expense-item-location'>Location: {props.location}</div>
            </div>
        </div>

    )
}
export default ExpenseItem;