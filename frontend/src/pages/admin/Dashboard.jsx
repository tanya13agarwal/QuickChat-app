import React from 'react'
import moment from "moment";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";


import AdminLayout from '../../components/layout/adminLayout/AdminLayout';
import LineChart from '../../components/layout/appLayout/LineChart';
import DoughnutChart from '../../components/layout/appLayout/DoughnutChart';

const Dashboard = () => {

  const Appbar = (
    <div className='p-8 m-8 ml-1 mr-1 rounded-2xl shadow-3xl'>
      <div className='flex flex-row items-center gap-4'>
        <MdAdminPanelSettings className='text-5xl'/>
        <input
          type='text'
          placeholder='Search...'
          className='p-4 pl-8 pr-8 w-[20vw] rounded-3xl text-[1.1rem] bg-grayColor focus:outline-none'
        />
        <button
          className='rounded-3xl p-4 pl-8 pr-8 border-none outline-none cursor-pointer bg-matBlack text-white text-[1.1rem]
          hover:bg-[rgba(0,0,0,0.8)]'
        >
          Search
        </button>
        <div className='ml-auto'/>
        <p className='hidden lg:block'>
          {moment().format("dddd, D MMMM YYYY")}
        </p>
        <FaBell/>

      </div>
    </div>
  )

  const widgets = (
    <div className='flex flex-col sm:flex-row gap-4 justify-between items-center m-4 ml-0 mr-0'>
      <Widget title = {"Users"} value = {34} Icon={<FaUser/>}/>
      <Widget title = {"Chats"} value = {3} Icon = {<FaUserGroup/>}/>
      <Widget title = {"Messages"} value = {453} Icon = {<MdMessage/>}/>
    </div>
  )

  return (
    <div>
        <AdminLayout>
            <div>
              {Appbar}

              <div className='flex sm:flex-col xl:flex-row sm:items-center xl:items-stretch gap-8 flex-wrap justify-center'>
                <div className='shadow-3xl p-8 pl-14 pr-14 rounded-2xl w-[100%] max-w-[45rem]'>
                  <p>
                    Last Messages
                  </p>
                  <LineChart value={[23,24,87,95,31 ]}/>
                </div>
                <div
                  className='shadow-3xl p-4 rounded-2xl flex items-center justify-center relative w-[100%] md:w-[50%] max-w-[25rem]'
                >
                  <DoughnutChart
                    value = {[23, 64]}
                    labels = {["Single Chats" , "Group Chats"]} 
                  />

                  <div className='flex absolute items-center justify-center gap-2 w-[100%] h-[100%]'>
                    <FaUserGroup/> VS <FaUser/>
                  </div>
                </div>
              </div>

              {widgets}
            </div>
        </AdminLayout>
    </div>
  )
}

const Widget = ({title , value , Icon}) => (
  <div className='shadow-3xl p-4 m-4 ml-0 mr-0 rounded-2xl w-[20rem]'>
    <div className='flex flex-col items-center gap-4'>
      <p className='text-[rgba(0,0,0,0.7) rounded-[50%] borser-[5px] border-matBlack w-20
      h-20cflex justify-center items-center'>
        {value}
      </p>
      <div className = "flex flex-row gap-4 items-center">
        {Icon}
        <p>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default Dashboard