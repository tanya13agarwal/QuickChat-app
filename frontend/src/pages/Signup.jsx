import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const handleSignup = () => {

    }

  return (
    <div className='w-11/12 mx-auto flex flex-col items-center justify-center'>
        {loading ? (
            <div className="spinner"></div>
                ) : (
                        <div>
                            <p>Sign Up</p>
                                
                            <form onSubmit={handleSubmit(handleSignup)}>

                                    {/* Full Name field */}
                                    <div className="flex flex-col">
                                        <label htmlFor="fullname" className="lable-style">
                                            FullName
                                        </label>
                                        <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        placeholder="Enter your fullname"
                                        className="form-style"
                                        {...register("fullname", { required: true })}
                                        />
                                        {errors.fullname && (
                                        <span className="-mt-1 text-[12px] text-yellow-100">
                                            •Please enter your correct fullname
                                        </span>
                                        )}
                                    </div>

                                    {/* Bio field */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="bio" className="lable-style">
                                            Bio
                                        </label>
                                        <textarea
                                        name="bio"
                                        id="bio"
                                        cols="30"
                                        rows="7"
                                        placeholder="Enter your bio here"
                                        className="form-style"
                                        {...register("bio", { required: true })}
                                        />
                                        {errors.bio && (
                                        <span className="-mt-1 text-[12px] text-yellow-100">
                                            Please enter your bio.
                                        </span>
                                        )}
                                    </div>


                                    {/* Username field */}
                                    <div className="flex flex-col">
                                        <label htmlFor="username" className="lable-style">
                                            Username
                                        </label>
                                        <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter your username"
                                        className="form-style"
                                        {...register("username", { required: true })}
                                        />
                                        {errors.username && (
                                        <span className="-mt-1 text-[12px] text-yellow-100">
                                            Please enter your correct username.
                                        </span>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div className="flex flex-col">
                                        <label htmlFor="password" className="lable-style">
                                            Password
                                        </label>
                                        <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your Password"
                                        className="form-style"
                                        {...register("password", { required: true })}
                                        />
                                        {errors.password && (
                                        <span className="-mt-1 text-[12px] text-yellow-100">
                                            Please enter your correct password.
                                        </span>
                                        )}
                                    </div>
                            
                                    {/* Submit button for Login Or Signup */}

                                    {/* Login */}
                                    <button
                                        // disabled={loading}
                                        type="submit"
                                        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                                        `}
                                    >
                                        SignUp
                                    </button>

                                    <p>OR</p>

                                    {/* Register */}
                                    <Link to="/login">
                                        <button
                                            // disabled={loading}
                                            // if clicked on log in, means the user is logged in the system
                                            // onClick={() => setIsLogin((prev) => (!prev))}
                                            className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
                                        >
                                            Login Instead
                                        </button>
                                    </Link>

                            </form>
                        </div>
                )
        }

    </div>
  )
}