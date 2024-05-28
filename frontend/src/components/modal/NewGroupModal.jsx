import React , { useState } from 'react'
// import { sampleUsers } from '../../data/sampleData'

import UserItem from '../shared/UserItem'
import { useDispatch, useSelector } from "react-redux";
import {
  useAvailableFriendsQuery,
  useNewGroupMutation,
} from "../../redux/api/api";
import { useAsyncMutation, useErrors } from "../../hooks/hook";
import { setIsNewGroup } from "../../redux/reducers/misc";
import toast from "react-hot-toast";

const NewGroupModal = () => {

  const { isNewGroup } = useSelector((state) => state.misc);
  const dispatch = useDispatch();

  const { isError, isLoading, error, data } = useAvailableFriendsQuery();
  const [newGroup, isLoadingNewGroup] = useAsyncMutation(useNewGroupMutation);

  const groupName = useInputValidation("");

  const [selectedMembers, setSelectedMembers] = useState([]);

  const errors = [
    {
      isError,
      error,
    },
  ];

  useErrors(errors);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const submitHandler = () => {
    if (!groupName.value) return toast.error("Group name is required");

    if (selectedMembers.length < 2)
      return toast.error("Please Select Atleast 3 Members");

    newGroup("Creating New Group...", {
      name: groupName.value,
      members: selectedMembers,
    });

    closeHandler();
  };

  const closeHandler = () => {
    dispatch(setIsNewGroup(false));
  };

  return (
    <div onClose={closeHandler} open={isNewGroup}
      className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-11/12 max-w-[400px] flex flex-col items-center justify-center rounded-lg border gap-5 bg-white p-6'>
          
            <p className='text-2xl font-semibold'>
                New Group
            </p>

            <input 
              type='text'
              placeholder='Group Name'
              className='form-style w-full focus:outline-none'
              value={groupName.value}
              onChange={groupName.changeHandler}
            />

            <span>
              Members
            </span>
            
            <div className='w-full'>
              {isLoading ? (
                <Skeleton />
                ) : (
                data?.friends?.map((i) => (
                  <UserItem
                    user={i}
                    key={i._id}
                    handler={selectMemberHandler}
                    isAdded={selectedMembers.includes(i._id)}
                  />
                  ))
                )}
            </div>

            <div className='flex items-center w-full justify-evenly'>
                <button className='text-red text-md' onClick={closeHandler}>
                  Cancel
                </button>
                <button 
                  onClick={submitHandler}
                  disabled={isLoadingNewGroup}
                  className='bg-Btnblue text-white text-md w-[25%] p-2 rounded-md'
                >
                  Create
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default NewGroupModal