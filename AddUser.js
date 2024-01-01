import React from 'react';
import Card from '../Ui/Card'
import classes from './AddUser.module.css';
import Button from '../Ui/Button'
import { useState,useRef } from 'react';
import ErrorModal from '../Ui/ErrorModal';
import Wrapper from '../Helpers/Wrapper';



const AddUser=(props)=>{
//const [enteredUsername,setEnteredUsername]=useState('');
//const [enteredAge,setEnetredAge]=useState('');
const [error,setError]=useState();

const nameInputRef=useRef();
const ageInputRef=useRef();
const collegeInputRef=useRef();


const addUserHandler=(event)=>{
    event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        const enteredCollege=collegeInputRef.current.value;


if(enteredName.trim().length===0||enteredUserAge.trim().length===0 || enteredCollege.trim().length===0){

    setError({
        title:'Invalid input',
        message:"Please enter both username and age"
    })
    return;
}
if(+enteredUserAge<1){
    setError({
        title:'Invalid age',
        message:"Please enter a valid age (> 0)"
    })
    return;
}

props.onAddUser(enteredName,enteredUserAge,enteredCollege);
//to clear input
nameInputRef.current.value='';
ageInputRef.current.value='';
collegeInputRef.current.value='';

//to clear input & add value prop inside input tag as shown in return
// setEnteredUsername('');
// setEnteredAge('');

}

// const usernameChangeHandler=(event)=>{
//     setEnteredUsername(event.target.value)
// }

// const ageChangeHandler=(event)=>{
//     setEnteredAge(event.target.value)
// }

const errorHandler=()=>{
    setError(null);
}

return(
    <Wrapper>
       {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" 
        // value={enteredUsername}
        //  onChange={usernameChangeHandler}
        ref={nameInputRef}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input type="number" id="age"
        //  value={enteredAge} onChange={ageChangeHandler}
        ref={ageInputRef}
        />
         <label htmlFor='Collegename'>College Name</label>
        <input type="text" id="Collegename"
        ref={collegeInputRef}/>
        <Button type='submit'>Add User</Button>
        
    </form>
    </Card>
    </Wrapper>
    
    )
}

export default AddUser;

