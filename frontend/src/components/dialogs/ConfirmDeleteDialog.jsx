import React from 'react'

const ConfirmDeleteDialog = ({open , handleClose , deleteHandler}) => {
  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
            <div className='w-11/12 max-w-[350px] rounded-lg border bg-white p-6'>
                <p className='text-2xl font-semibold text-richblack-5'>
                    Confirm Delete
                </p>
                <p className='mt-3 mb-5 leading-6 text-richblack-200'>
                    Are you sure you want to delete this group?
                </p>
                <div className='flex items-center gap-x-4'>
                    
                    <button 
                        onClick={handleClose}
                        className='cursor-pointer rounded-md  py-[8px] px-[20px] font-semibold text-Btnblue'
                    >
                        No
                    </button>

                    <button 
                        onClick={deleteHandler}
                        className='cursor-pointer rounded-md bg- py-[8px] px-[20px] font-semibold text-red'
                    >
                        Yes
                    </button>
                </div>
            </div>
            
        </div>
  )
}

export default ConfirmDeleteDialog