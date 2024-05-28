import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Drawer from "../../shared/Drawer";
import { Link, Navigate ,useLocation } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../redux/thunks/admin";


const adminTabs = [
    {
        name : "Dashboard",
        path : "/admin/dashboard",
        icon : <MdDashboard/>,
    },
    {
        name : "Users",
        path : "/admin/users",
        icon : <FaUser/>,
    },
    {
        name : "Chats",
        path : "/admin/chats",
        icon : <FaUserGroup/>,
    },
    {
        name : "Messages",
        path : "/admin/messages",
        icon : <MdMessage/>,
    },
]


const Sidebar = ({ className="w-[100%]" }) => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    const logoutHandler = () => {
      dispatch(adminLogout());
    };
  

    return (
        <div className={`${className} flex flex-col p-[3rem] gap-[3rem] `}>
            <p className='text-lg'>
                QuichChat
            </p>

            <div>
                {
                    adminTabs.map((tab) => (
                        <Link  key={tab.path} to={tab.path} className={`${
                                location.pathname === tab.path && "bg-matBlack text-white"
                            }  rounded-3xl p-4 pl-8 pr-8 hover:text-[rgba(0,0,0,0.54)]`} 
                        >
                            <div className='flex flex-row items-center gap-4'>
                                {tab.icon}
                                <p>
                                    {tab.name}
                                </p>
                            </div>
                        </Link>
                    ))
                }
                <Link onClick={logoutHandler}>
                    <div className='flex flex-row items-center gap-4'>
                            <MdOutlineLogout/>
                        <p>
                            Logout
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}


const AdminLayout = ({children}) => {

    const { isAdmin } = useSelector((state) => state.auth);

    const [isMobile, setIsMobile] = useState(false);

    const handleMobile = () => setIsMobile(!isMobile);

    const handleClose = () => setIsMobile(false);

    // if (!isAdmin) return <Navigate to="/admin" />;

  return (
    <div className='min-h-[100vh] grid grid-flow-col transition-all duration-200'>
        
        <div className='md:hidden fixed right-4 top-4 text-2xl'>
            <button onClick={handleMobile}>
                {
                    isMobile ? <IoMdClose/> : <IoMenu/>
                }
            </button>
        </div>
        
        <div className='md:block hidden lg:col-span-4 xl:col-span-3 bg-darkBaseColor'>
            <Sidebar/>
        </div>        
        
        <div className='col-span-12 md:block lg:col-span-8 xl:col-span-9 bg-grey'>
            {children}
        </div>        

        {
            isMobile && (
                <Drawer>
                    <Sidebar className = "w-[50vw] "/>
                </Drawer>
            )
        }
    </div>
  )
}

export default AdminLayout