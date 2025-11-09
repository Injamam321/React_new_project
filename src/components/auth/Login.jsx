import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-[80vh] px-4 bg-green-950 '>

            <div className=' bg-white max-w-sm p-8 rounded-2xl'>
                <h2 className='text-green-800 font-bold text-center text-2xl p-8 mb-6'> Login </h2>

                <form className='space-y-4'>
                    <input
                        type="Email"
                        placeholder='Write Your Email'
                        className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                        name=""
                        id="" />

                    <input
                        type="Password"
                        placeholder='Password'
                        className='w-full border px-4 py-2 rounded focus: outline-none focus:ring-2 focus:ring-green-500'
                        name=""
                        id="" />

                    <p className='text-right hover:text-green-400 cursor-pointer hover:underline'>
                        Forgot Password
                    </p>

                    <button
                        type='submit'
                        className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer'
                    >

                        Login

                    </button>

                </form>



                { /* Divider here  */}
                <div className='flex items-center my-6'>

                    <div className='flex-grow h-px bg-gray-700'></div>
                    <span className='text-gray-500 mx-4'>OR</span>
                    <div className='flex-grow h-px bg-gray-700'> </div>

                </div>



                <div className='flex flex-col space-y-3 mt-3 '>
                    <button className='bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer'>
                        Login with Google
                    </button>

                    <button className='bg-gray-600 py-2 rounded hover:bg-gray-900 cursor-pointer'>
                        Login with Github
                    </button>
                </div>

                <div className='text-center mt-5'>

                    <p className='text-sm'>
                        Don't have an account? <Link to={'/register'} className='text-green-700 font-semibold hover:underline'> Register Here</Link>
                    </p>

                </div>



            </div>



        </div>
    )
}

export default Login