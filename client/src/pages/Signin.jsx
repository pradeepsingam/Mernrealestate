import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
   
  return (
    <div>
      <h1 className='text-3xl text-center my-7 font-semibold'>
        SIGN IN
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-lg mx-auto'>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button className='bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-60'>SIGN IN</button>
        <div className='flex gap-2 mt-3'>
          <p>No Account yet?</p>
          <Link to='/signup' className='text-blue-700 hover:opacity-90'>Sign up</Link>
        </div>
      </form>
    </div>
  )
}
