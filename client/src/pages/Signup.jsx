import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <h1 className='text-3xl text-center my-7 font-semibold'>
        Sign up
      </h1>
      <form className='flex flex-col gap-4 max-w-lg mx-auto'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username' />
        <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-60'>SIGN UP</button>
        <div className='flex gap-2 mt-3'>
          <p>Already have an account?</p>
          <Link to='/signin' className='text-blue-700 hover:opacity-90'>Sign in</Link>
        </div>
      </form>
    </div>
  )
}
