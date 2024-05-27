import React from 'react';
import moment from "moment";

// if u send user={user} in applayout then inherit user here in () and add img src={user?.avatar}
const Profile = (user) => {
  return ( 
    <div className='gap-[2rem] flex flex-col items-center'>
        <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='Avatar'
            className='w-[200px] h-[200px] mb-[1rem] border-[5px] rounded-full border-white'
        />

        <ProfileCard heading = {"Bio"} text = {user?.bio}/>
        <ProfileCard heading = {"Username"} text = {user?.username}/> {/*@ icon*/}
        <ProfileCard heading = {"Name"} text = {user?.name}/> {/*CALANDER ICON*/}
        <ProfileCard heading = {"Joined"} text = {moment("2024-05-04T18:30:00.000Z").fromNow()}/> {/*CALANDER ICON*/}
    </div>
  )
};

const ProfileCard = ({text , Icon , heading}) => (
    <div className='flex items-center gap-[1rem] text-white justify-center'>
        {Icon && Icon}
        <div className='flex flex-col items-center justify-center'>
            <span>
                {text}
            </span>
            <span className='text-gray'>
                {heading}
            </span>
        </div>
    </div>
)

export default Profile