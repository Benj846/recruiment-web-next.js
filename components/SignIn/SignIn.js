import React, { useState } from "react";
const SignIn = () => {
  const [isModelOpen, setIsModelOpen] = useState(true);
  return (
    <div>
      {isModelOpen ? (
        <div className='flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75 z-10'>
          <div className='flex h-1/2 w-1/4 bg-white'>
            <button className='w-[50px] h-[60px] border' onClick={() => setIsModelOpen(false)}>
              exit
            </button>
            <div>
              <input className='block border-2' type='text' name='id' placeholder='Enter ID here' />
              <input
                className='block border-2'
                type='password'
                name='pw'
                placeholder='Enter PW here'
              />
            </div>
            oaisj
          </div>
        </div>
      ) : (
        <div>false</div>
      )}
    </div>
  );
};

export default SignIn;
