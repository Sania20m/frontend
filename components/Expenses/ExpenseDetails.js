function ExpenseDetails(props){
    return(
        <div>
        <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
                </div>
    )
}
export default ExpenseDetails;