import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='bg-green-900 flex items-center justify-center h-[80vh]' >

            <div className='text-white bg-white max-w-sm'>
                <h2 className='text-green-800 font-bold text-center text-2xl p-8 mb-6'> Login </h2>

                <form className='space-y-4 bg-amber-950'>
                    <input
                        type="Email"
                        placeholder='Write Your Email'
                        className='w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
                        name=""
                        id="" />

                    <input
                        type="Password"
                        placeholder='Password'
                        className='w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
                        name=""
                        id="" />

                    <button
                        type='submit'
                        className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer'
                    >

                        Login

                    </button>

                </form>

                <div className='flex flex-col space-y-3 mt-3 '>
                    <button className='bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer'>
                        Login with Google
                    </button>

                    <button className='bg-gray-600 py-2 rounded hover:bg-gray-900 cursor-pointer'>
                        Login with Github
                    </button>
                </div>

                <div className='text-green-600'>
                    <p>
                        Don't have an account? <Link to={'/register'}> Register Here</Link>
                    </p>
                </div>



            </div>



        </div>
    )
}

export default Login