import React from 'react';
import { FaFolderOpen } from "react-icons/fa";

import { transformImage } from '../../library/features';

export const RenderAttachments = (file , url) => {
  switch(file) {
    case "video":
        return <video src={url} preload='none' width={"200px"} controls/> 
    
    case "image":
        return <img src={transformImage(url , 200)} alt='Attachment' width={"200px"} height={"150px"}
        className='object-contain'/> 

    case "audio":
        return <audio src={url} preload='none'  controls/>  

    default:
        return <FaFolderOpen/>
        
  }
}
