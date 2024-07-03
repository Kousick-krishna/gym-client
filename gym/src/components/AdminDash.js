import React, { useState } from 'react';

function AdminDash() {
  const [showTable, setShowTable] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    fees: ''
  });

  const handleAddUserClick = () => {
    setShowTable(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({ name: '', age: '', weight: '', height: '', fees: '' });
  };

  return (
    <>
      <div className='bg-gray-600 min-h-screen p-4'>
        <h1 className='text-white font-serif font-extrabold text-2xl md:text-3xl text-center p-3'>
          Welcome! to the Dashboard
        </h1>
        <button 
          onClick={handleAddUserClick} 
          className='bg-black text-white rounded-3xl hover:bg-gray-800 mt-3 p-4 mx-auto block'>
          ADD USER
        </button>
      
      {showTable && (
        <div className='mt-5'>
          <form onSubmit={handleFormSubmit} className='mb-5'>
            <div className='flex flex-col items-center'>
              <input 
                type='text' 
                name='name' 
                placeholder='Name' 
                value={formData.name} 
                onChange={handleInputChange} 
                className='mb-2 p-2 border rounded w-full md:w-1/2' 
              />
              <input 
                type='number' 
                name='age' 
                placeholder='Age' 
                value={formData.age} 
                onChange={handleInputChange} 
                className='mb-2 p-2 border rounded w-full md:w-1/2' 
              />
              <input 
                type='number' 
                name='weight' 
                placeholder='Weight' 
                value={formData.weight} 
                onChange={handleInputChange} 
                className='mb-2 p-2 border rounded w-full md:w-1/2' 
              />
              <input 
                type='number' 
                name='height' 
                placeholder='Height' 
                value={formData.height} 
                onChange={handleInputChange} 
                className='mb-2 p-2 border rounded w-full md:w-1/2' 
              />
              <input 
                type='number' 
                name='fees' 
                placeholder='Fees' 
                value={formData.fees} 
                onChange={handleInputChange} 
                className='mb-2 p-2 border rounded w-full md:w-1/2' 
              />
              <button 
                type='submit' 
                className='bg-black text-white rounded-3xl hover:bg-gray-800 mt-3 p-4'>
                Enter
              </button>
            </div>
          </form>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full border-collapse border border-gray-400'>
              <thead>
                <tr>
                  <th className='border border-gray-300 px-4 py-2'>Name</th>
                  <th className='border border-gray-300 px-4 py-2'>Age</th>
                  <th className='border border-gray-300 px-4 py-2'>Weight</th>
                  <th className='border border-gray-300 px-4 py-2'>Height</th>
                  <th className='border border-gray-300 px-4 py-2'>Fees Paid</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                    <td className='border border-gray-300 px-4 py-2'>{user.age}</td>
                    <td className='border border-gray-300 px-4 py-2'>{user.weight}</td>
                    <td className='border border-gray-300 px-4 py-2'>{user.height}</td>
                    <td className='border border-gray-300 px-4 py-2'>{user.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default AdminDash;





