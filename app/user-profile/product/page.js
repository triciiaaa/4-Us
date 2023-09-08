"use client"

import * as React from 'react'; 
import Image from 'next/image'
import styles from '../../page.module.css'
import { Avatar } from '@mui/material'
import { useRouter } from 'next/navigation'
import { IconButton, Stack, Typography, CardMedia } from "@mui/material"; 
import RedeemIcon from '@mui/icons-material/Redeem'
import FavoriteIcon from "@mui/icons-material/Favorite"
import TextsmsIcon from "@mui/icons-material/Textsms"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import ReplyIcon from "@mui/icons-material/Reply"
import { useTheme } from "@mui/material/styles";
 
export default function NewGroup() {
  const router = useRouter()
  const theme = useTheme()

  const textStyle = {
    color: "white",
  };
 
  return ( 
      <main className={styles.main}>
  
      <div className={styles.landingImage}>
      <CardMedia
          component="img"
          image={"/product-shop.PNG"}
          title="Cafe"
          alt="Cafe"
        ></CardMedia>
    </div>
    </main>
    );
}
    