import React, { useState,useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer=(state,action)=>{
  if(action.type==='USER_INPUT'){
return {value:action.val, isValid:action.val.includes('@')};
}
if(action.type==='INPUT_BLUR'){
return {value:state.value, isValid:state.value.includes('@')};
}
return {value:'', isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,disptchEmail]=useReducer(emailReducer,
    {value:'',isValid:null});

//   useEffect(()=>{
//     const identifier=setTimeout(()=>{ 
//       console.log('Checking form validity');
//        setFormIsValid(
//   enteredEmail.includes('@') && enteredPassword.trim().length>6
//  )
//   },500)
//   return ()=>{
//     console.log('CLEANUP');
//     clearTimeout(identifier);
//   }
//   },[enteredEmail,enteredPassword])

useEffect(()=>{
  console.log('Effect running');
  return()=>{
    console.log('Effect cleanup')
  }
},[]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

disptchEmail({type:'USER_INPUT',val:event.target.value })

    setFormIsValid(
      // event.target.value.includes('@') && enteredPassword.trim().length > 6
     event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    setFormIsValid(
      // event.target.value.trim().length > 6 && enteredEmail.value.includes('@')
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    disptchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            // emailIsValid === false ? classes.invalid : ''
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // value={enteredEmail}
            value={emailState.isValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
