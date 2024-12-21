import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      navigate('/home');
    }
  }, [navigate]);

  // field Validations
  const validateForm = () => {
    const newErrors = {};

    if (formData.username !== 'emilys') {
      newErrors.username = 'Username must be "emilys"';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          expiresInMins: 30
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data));
        navigate('/home');
      } else {
        setErrors({ submit: 'Login failed. Please check your credentials.' });
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen w-full p-4 md:p-8 lg:p-16'>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className='hidden md:block'>
          <img
            src="../src/assets/Illustration.png"
            alt="login illustration"
            className='w-full max-w-[33.75rem] h-auto'
          />
        </div>

        {/* Form container */}
        <div className='w-full max-w-[47.5rem] p-6 lg:p-8 bg-white rounded-2xl shadow-sm border'>
          <div className="flex flex-col gap-4">
            <h1 className='text-2xl lg:text-[2.25rem] font-medium leading-tight mb-4'>
              Welcome to <br />
              <span className='text-purple text-3xl lg:text-[2.875rem] font-black'>
                Unstop
              </span>
            </h1>

            {/* Social Login Buttons */}
            <div className='space-y-4'>
              <button className="w-full flex items-center justify-center gap-4 p-4 lg:p-6 bg-white border rounded-lg shadow-md">
                <img src="../src/assets/google.svg" alt="google logo" />
                <span className='text-base font-medium'>Login with Google</span>
              </button>

              <button className="w-full flex items-center justify-center gap-4 p-4 lg:p-6 bg-white border rounded-lg shadow-md">
                <img src="../src/assets/facebook.svg" alt="facebook logo" />
                <span className='text-base font-medium'>Login with Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className='flex items-center gap-4 my-6'>
              <div className="flex-1 h-px bg-[#bfbfbf]"></div>
              <span>OR</span>
              <div className="flex-1 h-px bg-[#bfbfbf]"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Username Input */}
              <div className="relative">
                <div className="flex items-center bg-ash rounded-lg p-4">
                  <img src="../src/assets/account_circle.svg" alt="" className="mr-4" />
                  <div className='flex-1'>
                    <label className='text-xs'>Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder='username'
                      className='w-full bg-transparent focus:outline-none text-base font-bold placeholder-black'
                    />
                  </div>
                </div>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="flex items-center bg-ash rounded-lg p-4">
                  <img src="../src/assets/mail.svg" alt="" className="mr-4" />
                  <div className='flex-1'>
                    <label className='text-xs'>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='username@gmail.com'
                      className='w-full bg-transparent focus:outline-none text-base font-bold placeholder-black'
                    />
                  </div>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="flex items-center bg-ash rounded-lg p-4">
                  <img src="../src/assets/key.svg" alt="" className="mr-4" />
                  <div className='flex-1'>
                    <label className='text-xs'>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder='***********'
                      className='w-full bg-transparent focus:outline-none text-base font-bold placeholder-black'
                    />
                  </div>
                  <button type="button" className='ml-2'>
                    <img src="../src/assets/visibility.svg" alt="toggle password" />
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between my-6">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded-md bg-ash border opacity-30 checked:opacity-100"
                  />
                  <label>Remember me</label>
                </div>
                <a href="#" className="text-purple hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className='w-full py-4 bg-purple text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50'
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>

              {errors.submit && (
                <p className="text-red-500 text-center mt-2">{errors.submit}</p>
              )}
            </form>

            {/* Register Link */}
            <p className='text-center mt-6'>
              Don't have an account?{' '}
              <a href="#" className="text-purple hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;