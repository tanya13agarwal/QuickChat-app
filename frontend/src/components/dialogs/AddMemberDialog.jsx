import React, {useState} from 'react'
import { sampleUsers } from '../../data/sampleData'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({addMember , isLoadingAddMember , chatId}) => {
  
    const closeHandler = () => {
        setSelectedMembers([])
        setMembers([])
    } 
  
    const addMemberSubmitHandler = () => {

    } 

    const [members , setMembers] = useState(sampleUsers);
    const [selectedMembers , setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {
        setSelectedMembers((prev) => 
        prev.includes(id) 
        ? prev.filter((currElement) => currElement !== id)
        : [...prev , id]
        );
    };

    return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
            <div className='w-11/12 max-w-[350px] rounded-lg border flex flex-col bg-white p-6'>
                <p className='text-2xl font-semibold mx-auto text-black'>
                    Add Member
                </p>
                <div className='mt-3 mb-5 leading-6 text-black'>
                    {
                        members.length > 0 ? sampleUsers.map((user) => (
                            <UserItem 
                                key={user.id} 
                                user = {user} 
                                handler={selectMemberHandler}
                                isAdded = {selectedMembers.includes(user._id)} 
                            />
                        )) : (
                            <p className='translate-x-[35%]'>
                                No Friends
                            </p>
                        )
                    }
                </div>
                <div className='flex items-center justify-evenly gap-x-4'>
                    <button 
                        onClick={closeHandler}
                        className='cursor-pointer rounded-md text-red py-[8px] px-[20px] font-semibold text-'
                    >
                        Cancel
                    </button>
                    
                    <button 
                        onClick={addMemberSubmitHandler}
                        className='cursor-pointer rounded-md bg-Btnblue text-white py-[8px] px-[20px] font-semibold text-'
                    >
                        Submit Changes
                    </button>
                </div>
            </div>
            
        </div>
  )
}

export default AddMemberDialog