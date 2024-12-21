import React from 'react';

const Login = () => {
  return (
    <div className='h-screen w-screen m-16'>
      <div className="grid grid-cols-2 gap-8 m-[10rem] mx-auto my-auto drop-shadow-sm">
        <div>
          <img src="../src/assets/Illustration.png" alt="login illustration" className='w-[33.75rem] h-[33.75rem]' />
        </div>

        <div className='w-[47.5rem] p-[2rem] bg-white rounded-2xl'>
          <div className="flex flex-col gap-4">
            <h1 className='leading-[3.5rem] text-[2.25rem] font-[500] mb-4'>Welcome to <br />
              <span className='text-purple text-[2.875rem]  font-[900]'>Unstop</span>
            </h1>

            <div className="flex flex-col bg-white rounded-lg drop-shadow-md h-[4.875rem] w-full border text-center align-center items-center">
              <div className='flex flex-row text-[1rem] font-[500] gap-4 py-6 items-center'>
                <img src="./src/assets/google.svg" alt="google logo" className='mx-auto content-center' />
                <p>Login with Google</p>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg drop-shadow-md h-[4.875rem] w-full border text-center align-center items-center">
              <div className='flex flex-row text-[1rem] font-[500] gap-4 py-6 items-center'>
                <img src="./src/assets/facebook.svg" alt="facebook logo" className='mx-auto content-center' />
                <p>Login with Facebook</p>
              </div>
            </div>

            {/* divider */}
            <div className='flex flex-row my-4 mx-auto text-center w-full gap-8 items-center'>
              <div className="w-full bg-[#bfbfbf] h-[1px]"></div>
              <p>OR</p>
              <div className="w-full bg-[#bfbfbf] h-[1px]"></div>
            </div>

            {/* form inputs */}
            <form action="" className='flex flex-col gap-4'>
              <div className="flex flex-row bg-ash rounded-lg h-[4.875rem] w-full text-center align-center items-center px-4 gap-4">
                <img src="./src/assets/account_circle.svg" />
                <div className='flex flex-col text-left'>
                  <label htmlFor="username" className='text-[0.75rem]'>User name</label>
                  <input type="text" name="username" id="username" placeholder='username' className='font-[700] placeholder-black w-full bg-transparent focus:outline-none text-[1rem]' />
                </div>
              </div>

              <div className="flex flex-row bg-ash rounded-lg h-[4.875rem] w-full text-center align-center items-center px-4 gap-4">
                <img src="./src/assets/mail.svg" />
                <div className='flex flex-col text-left'>
                  <label htmlFor="username" className='text-[0.75rem]'>Email</label>
                  <input type="text" name="username" id="username" placeholder='username@gmail.com' className='font-[700] placeholder-black w-full bg-transparent focus:outline-none text-[1rem]' />
                </div>
              </div>

              <div className="flex flex-row bg-ash rounded-lg h-[4.875rem] w-full text-center align-center items-center px-4 gap-4">
                <img src="./src/assets/key.svg" />
                <div className='flex flex-col text-left'>
                  <label htmlFor="username" className='text-[0.75rem]'>Password</label>
                  <input type="text" name="username" id="username" placeholder='***********' className='font-[700] placeholder-black w-full bg-transparent focus:outline-none text-[1rem]' />
                </div>
                <a href="#" className='ml-auto' >
                  <img src="./src/assets/account_circle.svg" />
                </a>
              </div>

              <div className="flex flex-row gap-4 items-center my-4">
                <input type="checkbox" name="remember-me" id="remember-me" className="bg-ash rounded-lg h-[1.2rem] w-[1.2rem]" />
                <label htmlFor="remember-me">Remember me</label>
                <a href="" className='text-right ml-auto'>
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className='rounded-lg h-[3.8rem] w-full bg-purple text-white text-center align-center items-center px-4 gap-4'>Login</button>


            </form>

            <p className='text-center mt-4'>
              Don't have an account? <a href="">Register</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;