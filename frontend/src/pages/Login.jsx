import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login = () => {

    const [loading, setLoading] = useState(false);
    // fetch this data from useForm hook
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const handleLogin = () => {
        alert("form submitted");
    }

    return (

        <div className='bg-gradient-to-r from-baseColor to-baseColor2'>
            {loading ? (
                <div className="spinner"></div>
            ) 
            : (
                <div className="w-11/12 mx-auto flex flex-col items-center justify-center h-screen ">
                    <div className="w-[25%] pt-10 pb-10 flex flex-col items-center justify-center gap-5 bg-white shadow-2xl">
                        <p className="text-xl font-semibold">
                            Login
                        </p>
                            
                        <form onSubmit={handleSubmit(handleLogin)}
                            className="w-full flex flex-col items-center justify-center gap-3"
                        >

                            {/* Username field */}
                            <div className="flex flex-col w-[80%]">
                                <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username *"
                                className="form-style focus:outline-none"
                                {...register("username", { required: true })}
                                />
                                {errors.username && (
                                <span className="-mt-1 text-[12px] text-red">
                                    *Please enter your correct username
                                </span>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col w-[80%]">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password *"
                                    className="form-style focus:outline-none"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                                <span className="-mt-1 text-[12px] text-red">
                                    *Please enter your correct password
                                </span>
                                )}
                            </div>
                        
                            {/* Submit button for Login Or Signup */}

                            {/* Login */}
                            <button
                                type="submit"
                                className="w-[80%] bg-Btnblue p-2 text-white rounded-sm  mt-2 mb-2 hover:scale-95 transition-all
                                duration-200"
                            >
                                Login
                            </button>

                            <p>Or</p>

                            {/* Register */}
                            <Link to="/signup">
                                <button
                                    className="text-Btnblue hover:underline transition-all duration-200"
                                >
                                    Sign Up Instead
                                </button>
                            </Link>

                            </form>
                        </div>
                    </div>
                )
            }
        
        </div>

    )
}

export default Login