import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/auth/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-center px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center w-full md:w-[16.5rem]">
        <h1 className='text-xl sm:text-2xl text-center lg:text-[2.25rem] font-medium md:leading-loose mb-8 sm:mb-12 lg:mb-16'>
          Welcome to <br />
          <span className='text-purple text-2xl sm:text-3xl lg:text-[2.875rem] font-black'>Unstop</span>
        </h1>

        <div className="flex flex-col mx-auto text-center items-center content-center py-6 px-4 sm:px-8 w-full max-w-xs sm:max-w-sm rounded-3xl border shadow-lg">
          <img src="../src/assets/avatar.png" alt="user image" className='h-[5rem] w-[5rem] sm:h-[7.5rem] sm:w-[7.5rem] mb-4 sm:mb-6' />
          <p className="text-[0.875rem] sm:text-[1rem] font-[700] text-purple mb-2">{userData.firstName} {userData.lastname}</p>
          <p className='text-[0.75rem] font-[500] mb-1'>{userData.email}</p>
          <p className='text-[0.75rem] font-[500]'>{userData.gender}</p>
          <button
            type="submit"
            onClick={() => handleLogout()}
            className='bg-purple h-[2.5rem] w-[6.5rem] sm:h-[3rem] sm:w-[8.5rem] py-2 sm:py-4 text-white rounded-xl font-[700] text-[0.75rem] mt-4 sm:mt-6'>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;