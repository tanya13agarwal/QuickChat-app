import { useState } from "react"
import { useForm } from "react-hook-form"
import { useEffect } from "react";



const AdminLogin = () => {
    const isAdmin = true;


    const [loading, setLoading] = useState(false);

    // if(isAdmin) {
    //     return <Navigate to = "/admin/dashboard" />
    // }

    // fetch this data from useForm hook
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors , isSubmitSuccessful},
      } = useForm();
    
      useEffect(() => {
        if(isSubmitSuccessful) {
          reset({
            secretKey: "",
          })
        }
      },[reset , isSubmitSuccessful]);

    const submitHandler = (e) => {
        e.preventDefault()
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
                                Admin Login
                            </p>
                                
                            <form onSubmit={handleSubmit(submitHandler)}
                                className="w-full flex flex-col items-center justify-center gap-3"
                            >

                                {/* Password Field */}
                                <div className="flex flex-col w-[80%]">
                                    <input
                                        type="password"
                                        name="secretKey"
                                        id="secretKey"
                                        placeholder="Password *"
                                        className="form-style focus:outline-none"
                                        {...register("secretKey", { required: true })}
                                    />
                                    {errors.secretKey && (
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

                                </form>
                            </div>
                        </div>
                    )
                }
            
            </div>
    )
}

export default AdminLogin