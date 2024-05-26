import moment from 'moment';
import React from 'react'
import { fileFormat } from '../../library/features';
import { RenderAttachments } from './RenderAttachments';

const MessageComponent = ({message , user}) => {

    const { sender , content , attachments = [] , createdAt } = message;

    const sameSender = sender?._id === user?._id;
    
    const timeAgo = moment(createdAt).fromNow();

  return (
    <div className= {`bg-white  text-black rounded-[5px] p-[0.5rem] w-fit ${
        sameSender ? "ml-auto" : "mr-auto"
    }`}>
        {
            !sameSender && (
                <p className='text-lightBlue font-semibold text-xs'>
                    {sender.name}
                </p>
            )
        }

        {
            content && (
                <p className=''>
                    {content}
                </p>
            )
        }

        {
            attachments.length > 0 && 
            attachments.map((attachment , index) => {
                const url = attachment.url;
                const file = fileFormat(url);

                return (
                    <div key={index}>
                        <a
                            href={url}
                            target='_blank'
                            download
                            className='text-black'
                        >
                            {RenderAttachments(file , url)}
                        </a>
                    </div>
                )
            }) 
        }

        <p className='text-xs text-darkBaseColor'>
            {timeAgo}
        </p>
    </div>
  )
}

export default MessageComponent