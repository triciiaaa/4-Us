"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function ClickableAvatar({ user }) {
  const theme = useTheme();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <IconButton onClick={handleClick}>
      {isClicked ? (
        <Avatar
          alt="User Avatar"
          sx={{ width: 56, height: 56, bgcolor: theme.palette.blue.dark }}
        >
          {user}
        </Avatar>
      ) : (
        <Avatar
          alt="User Avatar"
          sx={{ width: 56, height: 56, bgcolor: theme.palette.blue.unselected }}
        >
          {user}
        </Avatar>
      )}
    </IconButton>
  );
}
