import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>

            <div className='flex items-center justify-center h-[100vh] px-4 bg-green-950 '>

                <div className=' bg-white max-w-lg p-8 rounded-2xl'>
                    <h2 className='text-green-800 font-bold text-center text-2xl p-8 mb-6'> Register </h2>

                    <form className='space-y-4'>
                        <input
                            type="Email"
                            placeholder='Write Your Full Name'
                            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                            name=""
                            id="" />
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

                        <input
                            type="Password"
                            placeholder='Confirm Password'
                            className='w-full border px-4 py-2 rounded focus: outline-none focus:ring-2 focus:ring-green-500'
                            name=""
                            id="" />

                        <div className='flex items-center justify-between'>
                            <p>
                                <input
                                    type="checkbox"
                                    name=""
                                    id="checkbox"
                                />

                                <label htmlFor="checkBox"> Accept Terms & <Link className='text-green-500'> Condition </Link></label>

                            </p>

                            <p className='text-right hover:text-green-400 cursor-pointer hover:underline'>
                                Forgot Password
                            </p>

                        </div>



                        <button
                            type='submit'
                            className='w-full text-white bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer'
                        >
                            Sign Up

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
                            Register with Google
                        </button>

                        <button className='bg-gray-600 py-2 rounded hover:bg-gray-900 cursor-pointer'>
                            Register with Github
                        </button>
                    </div>

                    <div className='text-center mt-5'>

                        <p className='text-sm'>
                            Already have an account? <Link to={'/login'} className='text-green-700 font-semibold hover:underline'> Login Here</Link>
                        </p>

                    </div>



                </div>



            </div>

        </div>
    )
}

export default Register