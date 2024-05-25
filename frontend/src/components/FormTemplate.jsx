import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const FormTemplate = ({formName, formButton, optionButton, isLogin, setIsLogin}) => {

    // const [isLogin, setIsLogin] = useState(true);

    // const toggleLogin = () => setIsLogin((prev) => !prev);
    
    console.log(isLogin);

    // fetch this data from useForm hook
    const {
        register,
        // handleSubmit,
        // reset,
        formState: { errors },
      } = useForm();

  return ( 
    
    <div>

    <p>{formName}</p>
    
    <form>

        {/* Username field */}
        <div className="flex">
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
        <div className="flex">
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
            // type="submit"
            className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
            `}
        >
            {formButton}
        </button>

        <p>Or</p>

        {/* Register */}
        <button
            // disabled={loading}
            // if clicked on Sign in, means the user is not logged in 
            onClick={() => setIsLogin((prev) => (!prev))}
            className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
        >
            {optionButton}
        </button>

    </form>
</div>
  )
}

export default FormTemplate