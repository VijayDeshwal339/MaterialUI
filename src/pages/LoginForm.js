import React from 'react';
import './style.css';
import Login from '../components/login';


const LoginForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
     <div className='container'>
        <Login setIsLoggedIn ={setIsLoggedIn} />
     </div>
    </div>
  )
}

export default LoginForm;