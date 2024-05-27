import React , {useEffect, useState} from 'react';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";


import Drawer from '../components/shared/Drawer';
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../data/sampleData"


import { useAsyncMutation, useErrors } from "../hooks/hook";
import {
  useChatDetailsQuery,
  useDeleteChatMutation,
  useMyGroupsQuery,
  useRemoveGroupMemberMutation,
  useRenameGroupMutation,
} from "../redux/api/api";

import { setIsAddMember } from "../redux/reducers/misc";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(() =>
  import("../components/dialogs/AddMemberDialog")
);

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAddMember } = useSelector((state) => state.misc);

  const myGroups = useMyGroupsQuery("");

  const groupDetails = useChatDetailsQuery(
    { chatId, populate: true },
    { skip: !chatId }
  );

  const [updateGroup, isLoadingGroupName] = useAsyncMutation(
    useRenameGroupMutation
  );

  const [removeMember, isLoadingRemoveMember] = useAsyncMutation(
    useRemoveGroupMemberMutation
  );

  const [deleteGroup, isLoadingDeleteGroup] = useAsyncMutation(
    useDeleteChatMutation
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

  const [members, setMembers] = useState([]);

  const errors = [
    {
      isError: myGroups.isError,
      error: myGroups.error,
    },
    {
      isError: groupDetails.isError,
      error: groupDetails.error,
    },
  ];

  useErrors(errors);

  useEffect(() => {
    const groupData = groupDetails.data;
    if (groupData) {
      setGroupName(groupData.chat.name);
      setGroupNameUpdatedValue(groupData.chat.name);
      setMembers(groupData.chat.members);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setMembers([]);
      setIsEdit(false);
    };
  }, [groupDetails.data]);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    updateGroup("Updating Group Name...", {
      chatId,
      name: groupNameUpdatedValue,
    });
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    dispatch(setIsAddMember(true));
  };

  const deleteHandler = () => {
    deleteGroup("Deleting Group...", chatId);
    closeConfirmDeleteHandler();
    navigate("/groups");
  };

  const removeMemberHandler = (userId) => {
    removeMember("Removing Member...", { chatId, userId });
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);


  const IconBtns = (
    <>
      <div className='block md:hidden fixed right-[1rem] top-[1rem] text-2xl p-1'>
        <button onClick={handleMobile}>
            <IoMenu/>
        </button>
      </div>

      <div>
        <button 
        onClick={navigateBack}
        className={`absolute rounded-full top-[2rem] left-[2rem] text-2xl p-1 bg-matBlack text-white hover:bg-[rgba(0,0,0,0.7)]`}
        >
            <MdOutlineKeyboardBackspace/>
        </button>
      </div>
    </>
  );
  

  const GroupName =(
    <div className='flex items-center justify-center gap-[1rem] p-[3rem]'>
      {
        isEdit ? (
          <>
            <input
              className='w-[100%] p-3 focus:outline-none border pl-1'
              value={groupNameUpdated}
              onChange={(e) => setGroupNameUpdated(e.target.value)}
            />
            <button 
              onClick={updateGroupName}
              disabled={isLoadingGroupName}
            >
                <MdDone className='text-xl'/>
            </button>
          </>
        ) : (
          <>
            <p className='text-2xl'>
              {groupName}
            </p>
            <button 
              disabled={isLoadingGroupName}
              onClick={() => setIsEdit(true)}
            >
                <MdEdit/>
            </button>
          </>
        )
      }
    </div>
  )



  return (
    <div className='grid grid-flow-col h-[100vh]'>
      
      <div className='hidden md:block md:col-span-4 bg-baseColor'>
        <GroupList myGroups={sampleChats} chatId={chatId}/>
      </div>
      
      <div className='col-span-12 md:col-span-8 flex flex-col items-center relative p-[1rem] pr-[3rem] pl-[3rem]'>
        {IconBtns}
        {
          groupName && <>
            {GroupName}

            <p className='m-[2rem] mr-auto'>
              Members
            </p>

            <div className='max-w-[45rem] w-[100%] box-border p-0 md:p-[1rem] lg:p-[1rem] lg:pl-[4rem] lg:pr-[4rem] gap-[2rem]
            h-[50vh] overflow-auto bg-bisque'>

            </div>
          </>
        }
      </div>
      
      {isMobile && <Drawer open = {isMobile} close = {handleMobileClose} GroupList = {<GroupList  myGroups={sampleChats} chatId={chatId}/>} className="w-50vw"/> }
    </div>
  )
};


const GroupList = ({myGroups = [] , chatId}) => (
  <div className='flex flex-col'>
    {
      myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group = {group} chatId = {chatId} key={group._id}/>
        ))
      ) : (
        <p className='flex items-center p-[1rem]'>
          No groups
        </p>
      )
    }
  </div>
);

const GroupListItem = ({group , chatId}) => {
  const {name , avatar , _id} = group;

  return (
    <Link 
      to={`?group=${_id}`}
      className='hover:bg-linkHover p-2'
      onClick={(e) => {
        if(chatId === _id ) e.preventDefault();
      }}
    >
      <div className='flex gap-[1rem] items-center'>
        <AvatarCard avatar = {avatar}/>
        <p>
          {name}
        </p>
      </div>
    </Link>
  )
}



export default Groups;