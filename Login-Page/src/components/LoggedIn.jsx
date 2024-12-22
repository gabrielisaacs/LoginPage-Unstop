import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedIn = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/auth/login');
  };

  return (
    <div className="flex min-h-screen bg-white items-center">
      <div className="flex flex-col mx-auto text-center items-center content-center py-6 px-12 w-[16.5rem] rounded-3xl border shadow-lg">
        <img src="../src/assets/avatar.png" alt="" className='h-[7.5rem] w-[7.5rem] mb-6' />
        <p className="text-[1rem] font-[700] text-purple mb-2">{userData.username || 'Michael Dam'}</p>
        <p className='text-[0.75rem] font-[500] mb-1'>{userData.email || 'example@gmail.com'}</p>
        <p className='text-[0.75rem] font-[500]'>{userData.gender || 'Female'}</p>
        <button type="submit" onClick={() => handleLogout()} className='bg-purple h-[3rem] w-[8.5rem] py-4  text-white rounded-xl font-[700] text-[0.75rem] mt-6'>Logout</button>
      </div>
    </div>
  );
};

export default LoggedIn;