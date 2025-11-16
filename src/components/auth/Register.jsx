import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [confirmPass, setConfirmPass] = useState(false);

    const handleRegisterForm = (e) => {
        e.preventDefault();

        const fullName = e.target.Name.value;
        const email = e.target.Email.value;
        const password = e.target.Password.value;
        const confirmpassword = e.target.Confirmpassword.value;




        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

            })
            .catch((err) => {
                console.error(err);
            })

    }


    return (
        <div>

            <div className='flex items-center justify-center h-[100vh] px-4 pt-5 bg-green-950 '>

                <div className=' bg-white max-w-lg p-8 rounded-2xl'>
                    <h2 className='text-green-800 font-bold text-center text-2xl p-8 mb-6'> Register </h2>

                    <form onSubmit={handleRegisterForm} className='space-y-4'>
                        <input
                            type="text"
                            placeholder='Write Your Full Name'
                            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                            name="Name"
                            id=""
                            required
                        />

                        <input
                            type="Email"
                            placeholder='Write Your Email'
                            className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                            name="Email"
                            id=""
                            required
                        />

                        {/* only password  */}
                        <div className='relative flex items-center'>
                            <input
                                type={showPass ? 'text' : 'password'}
                                placeholder='Password'
                                className='w-full border px-4 py-2 rounded focus: outline-none focus:ring-2 focus:ring-green-500'
                                name="Password"
                                id=""
                                required
                            />

                            {
                                showPass ? <FaEyeSlash onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer  hover:text-green-600' />
                                    :
                                    <FaEye onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer  hover:text-green-600' />
                            }

                        </div>

                        {/* confirm password */}

                        <div className='flex relative items-center'>
                            <input
                                type={confirmPass ? 'text' : 'password'}
                                placeholder='Confirm Password'
                                className='w-full border px-4 py-2 rounded focus: outline-none focus:ring-2 focus:ring-green-500'
                                name="Confirmpassword"
                                id=""
                                required
                            />

                            {
                                confirmPass ? <FaEyeSlash onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600' />
                                    :
                                    <FaEye onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer  hover:text-green-600' />
                            }


                        </div>


                        <div className='flex items-center justify-between'>
                            <p>
                                <input
                                    type="checkbox"
                                    name=""
                                    id="checkbox"
                                    required
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
                        <button className='bg-red-600 py-2 rounded flex items-center justify-center text-white hover:bg-red-700 cursor-pointer '>
                            Register with Google <FaGoogle className='ml-1' />
                        </button>

                        <button className='bg-gray-600 py-2 rounded flex items-center justify-center text-white hover:bg-gray-900 cursor-pointer'>
                            Register with Github <FaGithub className='ml-1' />
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