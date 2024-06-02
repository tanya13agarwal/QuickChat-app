import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { transformImage } from "../../lib/features";

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isLoading,
  current ,
  isAdded = false,
  styling = {},
}) => {
  const { name, _id, avatar } = user;
  console.log("current: ",current)

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        {...styling}
      >
        <Avatar src={transformImage(avatar)} />

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>
        
        <div 
          className={`${isAdded ? "bg-red" : isLoading && current ? "bg-[#1c1c1c]" : "bg-[#1a73d2]"} rounded-full text-white
          hover : ${isAdded ? "" : ""}`}
        >
          <IconButton
            size="small"
            sx={{
              color: "white",
            }}
            
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            {isAdded ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </div>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
