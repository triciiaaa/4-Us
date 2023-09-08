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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
 
export default function NewGroup() {
  const router = useRouter()
  const theme = useTheme()

  const textStyle = {
    color: "white",
  };
 
  return ( 
      <main className={styles.main}>
      <Stack direction="row" alignItems="center" gap="5px"> 
      <IconButton
      aria-label="back"
      onClick={() => router.push("/user-profile")}
      sx={{ marginLeft: "20px", marginTop: "20px", color: theme.palette.blue.main }}
    >
      <ArrowBackIosIcon fontSize="medium" />
      </IconButton>
      <Typography variant="h3" fontSize={30} align='center' style={textStyle} paddingLeft="5px"> 
      Group Name
      </Typography>
      </Stack>

      <div className={styles.landingImage}>
      <CardMedia
          component="img"
          image={"/product-shop.PNG"}
          title="product"
          alt="product"
        ></CardMedia>
    </div>
    </main>
    );
}
    