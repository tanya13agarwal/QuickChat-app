import {useState} from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

import SearchModal from '../modal/SearchModal';
import NewGroupModal from '../modal/NewGroupModal';
import NotificationModal from '../modal/NotificationModal';

const Header = () => {

    const [isSearch , setIsSearch] = useState(false);
    const [isMobile , setIsMobile] = useState(false);
    const [isNewGroup , setIsNewGroup] = useState(false);
    const [isNotification , setIsNotification] = useState(false);


    const handleMobile = () => {
        setIsMobile((prev) => (!prev))
    }

    const SearchHandler = () => {
        setIsSearch((prev) => !prev)
    }

    const NewGroupHandler = () => {
        setIsNewGroup((prev) => (!prev))
    }

    const ManageGroupHandler = () => {
    }

    const NotificationHandler = () => {
        setIsNotification((prev) => (!prev))
    }

    const LogoutHandler = () => {
    }

  return (
    <>
        <div className='flex items-center justify-between static bg-baseColor h-[4rem] transition-all duration-200'>
        <>
            <p className="hidden md:block text-white font-semibold text-xl p-5">
                QuickChat
            </p>
            <button onClick={handleMobile}>
                <IoMenu className="md:hidden text-white m-5 text-3xl"/>
            </button>
        </>

        <div className="flex justify-between items-center text-white text-2xl gap-4 m-5">
            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={SearchHandler}
            >
                <IoMdSearch/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={NewGroupHandler}
            >
                <IoMdAdd/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={ManageGroupHandler}
            >
                <MdGroup/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={NotificationHandler}
            >
                <FaBell/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={LogoutHandler}
            >
                <MdOutlineLogout/>
            </button> 

        </div>
        

        </div>
        {isSearch && <SearchModal/>}
        {isNewGroup && <NewGroupModal/>}
        {isNotification  && <NotificationModal/>}
    </>
  )
}

export default Header