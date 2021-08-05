import React, { useState } from "react";
const SignIn = () => {
  let isNotClicked = false;
  let Clicked = true;
  const [IsSignUp, setIsSignUp] = useState(Clicked);
  const [LoginInfo, setLoginInfo] = useState({ name: "", email: "", password: "" });
  const signIn = (e) => {
    e.preventDefault();
    console.log(LoginInfo);
  };
  return (
    <div className='w-max h-96'>
      <div className='flex justify-center '>
        <button className='m-8' onClick={() => setIsSignUp(isNotClicked)}>
          Sign up
        </button>
        <button className='w-[60px] h-[30px] m-8 border-b-2' onClick={() => setIsSignUp(Clicked)}>
          Sign in
        </button>
      </div>
      {IsSignUp ? (
        <div className='flex flex-col justify-center items-center'>
          <input
            className='my-4 block rounded border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='email'
            name='id'
            placeholder='Email'
          />
          <input
            className='my-4 block rounded border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='password'
            name='pw'
            placeholder='password'
          />
          <button
            className='rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white'
            onClick={signIn}>
            Log in
          </button>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <input
            className='my-4 block rounded border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='text'
            name='name'
            placeholder='Full Name'
            onChange={(e) => setLoginInfo({ ...LoginInfo, name: e.target.value })}
          />
          <input
            className='my-4 block rounded border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='email'
            name='email'
            placeholder='Email'
            onChange={(e) => setLoginInfo({ ...LoginInfo, email: e.target.value })}
          />
          <input
            className='my-4 block rounded border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
            type='password'
            name='password'
            placeholder='Password'
            onChange={(e) => setLoginInfo({ ...LoginInfo, password: e.target.value })}
          />
          <button
            className='rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white'
            onClick={signIn}>
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
