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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsMobile, setIsSearch, setIsNewGroup, setIsNotification } from '../../redux/reducers/misc';
import { resetNotificationCount } from '../../redux/reducers/chat';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isSearch, isNotification, isNewGroup } = useSelector( (state) => state.misc );
    const { notificationCount } = useSelector((state) => state.chat);
    

    const handleMobile = () => dispatch(setIsMobile(true)); 

    const openSearch = () => dispatch(setIsSearch(true));


    const openNewGroup = () => {
        dispatch(setIsNewGroup(true));
      };
    
      const openNotification = () => {
        dispatch(setIsNotification(true));
        dispatch(resetNotificationCount());
      };
    
      const navigateToGroup = () => navigate("/groups");

    const LogoutHandler = async () => {
        try {
            const { data } = await axios.get(`${server}/api/v1/user/logout`, {
              withCredentials: true,
            });
            dispatch(userNotExists());
            toast.success(data.message);
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } 
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
                onClick={openSearch}
            >
                <IoMdSearch/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={openNewGroup}
            >
                <IoMdAdd/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={(navigateToGroup)}
            >
                <MdGroup/>
            </button>

            <button
                className="hover:bg-gray hover:rounded-full p-2"
                onClick={openNotification}
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
};

// redesign:- notification ko value dete hi notif icon pe uska count likh k ayega
// const IconBtn = ({ title, icon, onClick, value }) => {
//     return (
//       <Tooltip title={title}>
//         <IconButton color="inherit" size="large" onClick={onClick}>
//           {value ? (
//             <Badge badgeContent={value} color="error">
//               {icon}
//             </Badge>
//           ) : (
//             icon
//           )}
//         </IconButton>
//       </Tooltip>
//     );
// };

export default Header