import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SignUp from './SignUp/SignUp';
const SignIn = () => {
  let isNotClicked = false;
  let Clicked = true;
  const [IsSignUp, setIsSignUp] = useState(isNotClicked);
  return (
    <div className="w-max h-96 min-h-screen">
      <div className="flex justify-center ">
        <button className="m-8" onClick={() => setIsSignUp(isNotClicked)}>
          Sign up
        </button>
        <button
          className="w-[60px] h-[30px] m-8 border-b-2"
          onClick={() => setIsSignUp(Clicked)}>
          Sign in
        </button>
      </div>
      {IsSignUp ? (
        <div className="flex flex-col justify-center items-center">
          <input
            className="my-2 block rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            type="email"
            name="id"
            placeholder="Email"
          />
          <input
            className="my-2 block rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            type="password"
            name="pw"
            placeholder="password"
          />
          <button className="rounded-lg bg-green-500 hover:bg-green-700 m-2 w-20 h-8 text-white">
            Log in
          </button>
        </div>
      ) : (
        <SignUp />
      )}
    </div>
  );
};

export default SignIn;
