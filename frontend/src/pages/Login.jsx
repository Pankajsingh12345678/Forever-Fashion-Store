import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

      {/* Heading */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Name - Only Sign Up */}
      {currentState === 'Sign Up' && (
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}

      {/* Email */}
      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        title='Please enter a valid email address, e.g. example@gmail.com'
        required
      />

      {/* Password */}
      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        minLength='8'
        pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}'
        title='Password must be at least 8 characters and contain uppercase, lowercase and a number'
        required
      />

      {/* Forgot Password + Create Account / Login Here */}
      <div className='w-full flex justify-between text-sm'>

        <p className='cursor-pointer'>
          Forgot your password?
        </p>

        <p
          onClick={() =>
            setCurrentState(
              currentState === 'Login' ? 'Sign Up' : 'Login'
            )
          }
          className='cursor-pointer'
        >
          {currentState === 'Login'
            ? 'Create Account'
            : 'Login Here'}
        </p>

      </div>

      {/* Button */}
      <button
        type='submit'
        className='bg-black text-white px-8 py-2 mt-2'
      >
        {currentState === 'Login' ? 'Login' : 'Sign Up'}
      </button>

    </form>
  )
}

export default Login
