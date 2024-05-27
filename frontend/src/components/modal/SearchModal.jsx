import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { IoMdSearch } from "react-icons/io";
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../data/sampleData';

import { setIsSearch } from '../../redux/reducers/misc';

import { useLazySearchUserQuery, useSendFriendRequestMutation } from "../../redux/api/api";

const SearchModal = () => {

  const { isSearch } = useSelector((state) => state.misc);

  const [searchUser] = useLazySearchUserQuery();
 
  const [sendFriendRequest, isLoadingSendFriendRequest] = useAsyncMutation(
    useSendFriendRequestMutation
  );

  const dispatch = useDispatch();
 
  const search = useInputValidation("");

  const [users, setUsers] = useState([]);

  const addFriendHandler = async (id) => {
    await sendFriendRequest("Sending friend request...", { userId: id });
  };

  const searchCloseHandler = () => dispatch(setIsSearch(false));

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchUser(search.value)
        .then(({ data }) => setUsers(data.users))
        .catch((e) => console.log(e));
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [search.value]);


  return (
    // drawer 
    <div open={isSearch} onClose={searchCloseHandler} 
    className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-11/12 max-w-[400px] flex flex-col items-center justify-center rounded-lg border gap-5 bg-white p-6'>
            <p className='text-2xl font-semibold'>
                Find People
            </p>
            <from className='relative w-full'>
              <input 
                type = "text"
                name = "search"
                id = "search"
                //{...register("search")}
                placeholder='Search'
                className='w-[100%] mt-3 p-3 focus:outline-none border pl-9 border-Btnblue mb-5 leading-6 '
              />
              <IoMdSearch className='absolute top-[33%] left-2 text-2xl '/>
            </from>

            <ul className='w-full'>
              {
                users.map((user) => (
                  <li>
                    <UserItem 
                      key={user._id} 
                      user = {user} 
                      handler={addFriendHandler} 
                      handlerIsLoading={isLoadingSendFriendRequest}/>
                  </li>
                ))
              }
            </ul>
            
        </div>
        
    </div>
  )
}

export default SearchModal