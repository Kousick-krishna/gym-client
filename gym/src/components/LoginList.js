import React from 'react';
import { Link } from 'react-router-dom';

function LoginList() {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-gray-600 min-h-screen text-white p-4 md:p-8'>
        <h1 className='font-bold text-2xl md:text-3xl p-3'>Login</h1>
        
        <Link to="/AdminLogin" className="w-full max-w-xs">
          <button className="bg-black text-white w-full py-3 rounded hover:bg-gray-800 mt-2 text-base md:text-lg">
            Admin
          </button>
        </Link>
        
        <Link to="/UserLogin" className="w-full max-w-xs">
          <button className="bg-black text-white w-full py-3 rounded hover:bg-gray-800 mt-2 text-base md:text-lg">
            User
          </button>
        </Link>
      </div>
    </>
  );
}

export default LoginList;




