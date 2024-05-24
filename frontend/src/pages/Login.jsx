// import React, { useEffect, useState } from 'react'
// import { useForm } from "react-hook-form"
import FormTemplate from '../components/FormTemplate';

const Login = () => {

    // useState to check if the user is logged in or not
    const [isLogin, setIsLogin] = useState(true);

    // // useEffect(() => {
    // //     console.log(isLogin);
    // //   }, [isLogin]);

    const toggleLogin = () => setIsLogin((prev) => (!prev));

    // // fetch this data from useForm hook
    // const {
    //     register,
    //     // handleSubmit,
    //     // reset,
    //     formState: { errors },
    //   } = useForm()

    return (
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center'>
            {
                // if isLogin is true then show Login Page else show Sign Up Page
                isLogin ? (
                    // <div>

                    //     <p>Login</p>
                        
                    //     <form>

                    //         {/* Username field */}
                    //         <div className="flex">
                    //             <label htmlFor="username" className="lable-style">
                    //                 Username
                    //             </label>
                    //             <input
                    //             type="text"
                    //             name="username"
                    //             id="username"
                    //             placeholder="Enter your username"
                    //             className="form-style"
                    //             {...register("username", { required: true })}
                    //             />
                    //             {errors.username && (
                    //             <span className="-mt-1 text-[12px] text-yellow-100">
                    //                 Please enter your correct username.
                    //             </span>
                    //             )}
                    //         </div>

                    //         {/* Password Field */}
                    //         <div className="flex">
                    //             <label htmlFor="password" className="lable-style">
                    //                 Password
                    //             </label>
                    //             <input
                    //             type="password"
                    //             name="password"
                    //             id="password"
                    //             placeholder="Enter your Password"
                    //             className="form-style"
                    //             {...register("password", { required: true })}
                    //             />
                    //             {errors.password && (
                    //             <span className="-mt-1 text-[12px] text-yellow-100">
                    //                 Please enter your correct password.
                    //             </span>
                    //             )}
                    //         </div>
                    
                    //         {/* Submit button for Login Or Signup */}

                    //         {/* Login */}
                    //         <button
                    //             // disabled={loading}
                    //             type="submit"
                    //             className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                    //             `}
                    //         >
                    //             Login
                    //         </button>

                    //         <p>Or</p>

                    //         {/* Register */}
                    //         <button
                    //             // disabled={loading}
                    //             type="text"
                    //             // if clicked on Sign in, means the user is not logged in 
                    //             onClick={() => setIsLogin((prev) => (!prev))}
                    //             className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
                    //         >
                    //             Sign Up Instead
                    //         </button>

                    //     </form>
                    // </div>

                    <FormTemplate formName="Login" formButton="Login" optionButton="signup instead"/>
                )
                : (
                    // <div>

                    //     <p>Sign Up</p>
                        
                    //     <form>

                    //         {/* Full Name field */}
                    //         <div className="flex">
                    //             <label htmlFor="fullname" className="lable-style">
                    //                 FullName
                    //             </label>
                    //             <input
                    //             type="text"
                    //             name="fullname"
                    //             id="fullname"
                    //             placeholder="Enter your fullname"
                    //             className="form-style"
                    //             {...register("fullname", { required: true })}
                    //             />
                    //             {errors.fullname && (
                    //             <span className="-mt-1 text-[12px] text-yellow-100">
                    //                 Please enter your correct fullname.
                    //             </span>
                    //             )}
                    //         </div>

                    //         {/* Bio field */}
                    //         <div className="flex flex-col gap-2">
                    //             <label htmlFor="bio" className="lable-style">
                    //                 Bio
                    //             </label>
                    //             <textarea
                    //             name="bio"
                    //             id="bio"
                    //             cols="30"
                    //             rows="7"
                    //             placeholder="Enter your bio here"
                    //             className="form-style"
                    //             {...register("bio", { required: true })}
                    //             />
                    //             {errors.bio && (
                    //             <span className="-mt-1 text-[12px] text-yellow-100">
                    //                 Please enter your bio.
                    //             </span>
                    //             )}
                    //         </div>


                    //         {/* Username field */}
                    //         <div className="flex">
                    //             <label htmlFor="username" className="lable-style">
                    //                 Username
                    //             </label>
                    //             <input
                    //             type="text"
                    //             name="username"
                    //             id="username"
                    //             placeholder="Enter your username"
                    //             className="form-style"
                    //             {...register("username", { required: true })}
                    //             />
                    //             {errors.username && (
                    //             <span className="-mt-1 text-[12px] text-yellow-100">
                    //                 Please enter your correct username.
                    //             </span>
                    //             )}
                    //         </div>

                    //         {/* Password Field */}
                    //         <div className="flex">
                    //             <label htmlFor="password" className="lable-style">
                    //                 Password
                    //             </label>
                    //             <input
                    //             type="password"
                    //             name="password"
                    //             id="password"
                    //             placeholder="Enter your Password"
                    //             className="form-style"
                    //             {...register("password", { required: true })}
                    //             />
                    //             {errors.password && (
                    //             <span className="-mt-1 text-[12px] text-yellow-100">
                    //                 Please enter your correct password.
                    //             </span>
                    //             )}
                    //         </div>
                    
                    //         {/* Submit button for Login Or Signup */}

                    //         {/* Login */}
                    //         <button
                    //             // disabled={loading}
                    //             type="submit"
                    //             className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                    //             `}
                    //         >
                    //             SignUp
                    //         </button>

                    //         <p>OR</p>

                    //         {/* Register */}
                    //         <button
                    //             // disabled={loading}
                    //             type="text"
                    //             // if clicked on log in, means the user is logged in the system
                    //             onClick={() => setIsLogin((prev) => (!prev))}
                    //             className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
                    //         >
                    //             Login Instead
                    //         </button>

                    //     </form>
                    // </div>

                    
                    <FormTemplate formName="SignUp" formButton="SignUp" optionButton="Login instead"/>
                    
                )
            }
            
        </div>

    )
}

export default Login