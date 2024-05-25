
import React from "react";
import { transformImage } from "../../library/features";

// Todo Transform
const AvatarCard = ({ avatar = []}) => {
  return (
    <div className="flex relative gap-1">
      {/* <AvatarGroup
        max={max}
      > */}
        <div className="w-[5rem] h-[3rem]">
          {avatar.map((i, index) => (
            <div key={Math.random() * 100}>
                <img className="w-[3rem] h-[3rem] absolute" 
                    src={transformImage(i)}
                    alt={`Avatar ${index}`}
                    // left: {
                    //   xs: `${0.5 + index}rem`,
                    //   sm: `${index}rem`,
                    // }
                />
            </div>
          ))}
        </div>
      </div>
  );
};

export default AvatarCard;
