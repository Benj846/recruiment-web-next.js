import React, { useState } from "react";
const SignIn = () => {
  const [IsSignUp, setIsSignUp] = useState(false);
  const [LoginInfo, setLoginInfo] = useState({ name: "", email: "", password: "" });
  const signIn = (e) => {
    e.preventDefault();
    console.log(LoginInfo);
  };
  return (
    <div className=''>
      <button className='ml-8' onClick={() => setIsSignUp(false)}>
        Sign up
      </button>
      <button className='ml-8' onClick={() => setIsSignUp(true)}>
        Sign in
      </button>
      {IsSignUp ? (
        <div>
          <input className='block border-2' type='email' name='id' placeholder='Email' />
          <input className='block border-2' type='password' name='pw' placeholder='password' />
        </div>
      ) : (
        <div>
          <input
            className='block border-2'
            type='text'
            name='id'
            placeholder='Your name'
            onChange={(e) => setLoginInfo({ ...LoginInfo, name: e.target.value })}
          />
          <input
            className='block border-2'
            type='email'
            name='id'
            placeholder='Email'
            onChange={(e) => setLoginInfo({ ...LoginInfo, email: e.target.value })}
          />
          <input
            className='block border-2'
            type='password'
            name='pw'
            placeholder='password'
            onChange={(e) => setLoginInfo({ ...LoginInfo, password: e.target.value })}
          />
          <button className='block border-2' onClick={signIn}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
