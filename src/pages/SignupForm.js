import React from 'react';
import './style.css';
import SignUp from '../components/signup';

const SignupForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
     <div className='container'>
        <SignUp setIsLoggedIn ={setIsLoggedIn} />
     </div>
    </div>
  )
}

export default SignupForm;
