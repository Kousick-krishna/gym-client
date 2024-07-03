import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gym-server-opal.vercel.app/UserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserId: userId, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }
      window.location.href = "/Userplatform";
    } catch (err) {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className='flex flex-col items-center justify-center bg-gray-600 min-h-screen text-white p-4 md:p-8'>
        <h1 className='font-bold text-2xl md:text-3xl p-3'>User Login</h1>
        
        <label className='p-3 text-base md:text-lg'>User Id</label>
        <input
          type='text'
          placeholder='Enter your Id'
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className='p-3 rounded-md text-black w-full max-w-md'
        />
        
        <label className='p-3 text-base md:text-lg'>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='p-3 rounded-md text-black w-full max-w-md'
        />
        
        <button className="bg-black text-white rounded-3xl hover:bg-gray-800 mt-3 p-4 text-base md:text-lg w-full max-w-md">
          Login
        </button>
        
        <span className='mt-4 text-base md:text-lg'>
          Don't have an account? <Link to="/UserReg" className='text-black font-mono'>Sign Up</Link>
        </span>
      </div>
    </form>
  );
}

export default UserLogin;




