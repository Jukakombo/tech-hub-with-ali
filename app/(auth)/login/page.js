import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div className="">
        <form action="" className='flex  flex-col md:w-[500px] md:m-auto bg-[#211f32] p-4'>
            <input type="text" placeholder='Username' className='my-2 p-2 rounded-md text-gray-400 bg-[#2d2b42] outline-none' /><input type="password" placeholder='Password' className='my-2 p-2 rounded-md text-gray-400 bg-[#2d2b42] outline-none'/>
            <button className='p-2 bg-blue-600 mt-2 rounded-md'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
