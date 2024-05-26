import React from 'react';
import moment from "moment";

const Profile = () => {
  return (
    <div className='gap-[2rem] flex flex-col items-center'>
        <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='Avatar'
            className='w-[200px] h-[200px] mb-[1rem] border-[5px] rounded-full border-white'
        />
        <ProfileCard heading = {"Bio"} text = {"sdfv adfvd df fg sd"}/>
        <ProfileCard heading = {"Username"} text = {"@texty"}/> {/*@ icon*/}
        <ProfileCard heading = {"Name"} text = {"Mahaaraja"}/> {/*CALANDER ICON*/}
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