import React, { useState } from 'react';

function AdminReg() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://gym-server-opal.vercel.app/AdminReg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ AdminId: adminId, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid AdminId or password');
      }

      window.location.href = "/AdminLogin";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className='flex flex-col items-center justify-center bg-gray-600 min-h-screen text-white p-4 md:p-8'>
          <h1 className='font-bold text-2xl md:text-3xl p-3'>Sign Up</h1>
          <label className='p-3 text-base md:text-lg'>
            Admin Id
          </label>
          <input 
            type='text'
            placeholder='Create your Id'
            required
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className='p-3 rounded-md text-black w-full max-w-md'
          />
          <label className='p-3 text-base md:text-lg'>
            Password
          </label>
          <input 
            type='password'
            placeholder='Create your password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-3 rounded-md text-black w-full max-w-md'
          />
          <button className="bg-black text-white rounded-3xl hover:bg-gray-800 mt-3 p-4 text-base md:text-lg w-full max-w-md">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default AdminReg;


