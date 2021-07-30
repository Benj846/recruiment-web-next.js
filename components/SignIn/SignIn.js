import React, { useState } from "react";
const SignIn = () => {
  const [IsSignUp, setIsSignUp] = useState(true);
  return (
    <div className=''>
      <button onClick={() => setIsSignUp(false)}>Sign up</button>
      <button onClick={() => setIsSignUp(true)}>Sign in</button>
      {IsSignUp ? (
        <div>
          <input className='block border-2' type='email' name='id' placeholder='Email' />
          <input className='block border-2' type='password' name='pw' placeholder='password' />
        </div>
      ) : (
        <div>
          <input className='block border-2' type='text' name='id' placeholder='Your name' />
          <input className='block border-2' type='email' name='id' placeholder='Email' />
          <input className='block border-2' type='password' name='pw' placeholder='password' />
        </div>
      )}
    </div>
  );
};

export default SignIn;
