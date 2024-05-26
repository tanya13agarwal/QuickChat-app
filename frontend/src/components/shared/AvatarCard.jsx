import React from "react";
import { transformImage } from "../../library/features";

// Todo Transform
const AvatarCard = ({ avatar = [] , max = 4}) => {
  console.log("Avatar: " , avatar)
  return (
    <div className="flex  gap-1">
      <div
        // max = {max}
        
      >
        <div className="relative flex w-[5rem] h-[3rem]" >
          {avatar.map((i, index) => (
            <div key={Math.random() * 100}>
                <img className={`absolute rounded-full border-2 border-white w-[3rem] h-[3rem] left-[${0.5 + index}rem] md:right-[${index}rem]`} 
                    src={transformImage(i)}
                    alt={`Avatar ${index}`}
                />
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
