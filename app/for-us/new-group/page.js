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
  
      <div className={styles.landingImage}>
        <CardMedia
          component="img"
          image={"/cafe_darker.jpg"}
          title="Cafe"
          alt="Cafe"
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        > 
          <Stack gap="15px">
            <Stack direction="row" alignItems="center" gap="5px"> 
            <IconButton
            aria-label="back"
            onClick={() => router.push("/for-us")}
            sx={{ marginLeft: "10px", color: theme.palette.blue.main }}
          >
            <ArrowBackIosIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h3" fontSize={30} align='center' style={textStyle} paddingLeft="5px"> 
            Group Name
            </Typography>
          
            <IconButton aria-label="present" onClick={() => router.push('/for-us/new-group/exchanges')} 
            style={{
              color: theme.palette.white.main,
              paddingLeft: "100px"
            }}>
            <RedeemIcon fontSize="large"/>
            </IconButton>
            </Stack>
        
            <Stack direction="row" gap="20px">
              <Image
                src="/person1.png"
                width={80}
                height={80}
                style={{ borderRadius: "10px" }}
                alt="Preview"
                onClick={() => router.push('/user-profile')}
                />
              <Image
                src="/person2.png"
                width={80}
                height={80}
                style={{ borderRadius: "10px" }}
                alt="Preview"
                />
              <Image
                src="/person3.png"
                width={80}
                height={80}
                style={{ borderRadius: "10px" }}
                alt="Preview"
                />
            </Stack>
          </Stack>

          <Stack
            marginLeft="350px"
            marginTop="230px"
            gap="10px"
            direction="flex"
            flexDirection="column"
            alignItems="center"
          >            
            {/* profile */}
            <Image
                src="/person4.png"
                width={40}
                height={40}
                style={{ borderRadius: "10px" }}
                alt="Preview"
                onClick={() => router.push('/user-profile')}
              />

            {/* like */}
            <Stack
              direction="flex"
              flexDirection="column"
              alignItems="center"
              gap="0px"
            >
              <IconButton
                aria-label="like"
                style={{
                  color: theme.palette.white.main,
                }}
                onClick={() => router.push("/tiktok-shop")}
              >
                <FavoriteIcon />
              </IconButton>
              <Typography
                variant="tiny_tag_bold"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                1392
              </Typography>
            </Stack>

            {/* chat */}
            <Stack
              direction="flex"
              flexDirection="column"
              alignItems="center"
              gap="0px"
            >
              <IconButton
                aria-label="chat"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                <TextsmsIcon />
              </IconButton>
              <Typography
                variant="tiny_tag_bold"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                73
              </Typography>
            </Stack>
            
            {/* save */}
            <Stack
              direction="flex"
              flexDirection="column"
              alignItems="center"
              gap="0px"
            >
              <IconButton
                aria-label="save"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                <BookmarkIcon />
              </IconButton>
              <Typography
                variant="tiny_tag_bold"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                182
              </Typography>

              {/* send */}
              <IconButton
                aria-label="share"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                <ReplyIcon />
              </IconButton>
              <Typography
                variant="tiny_tag_bold"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                18
              </Typography>
            </Stack>
            </Stack>
            
            {/* caption */}
            <Stack gap="15px">
            <Stack direction="row" alignItems="center">
              <Image
                  src="/person5.png"
                  width={40}
                  height={40}
                  style={{ borderRadius: "10px" }}
                  alt="Preview"
                />
              <Typography
                variant="body"
                textAlign="left"
                paddingLeft="20px"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                You saved {'>'}
              </Typography>
            </Stack>
            <Stack gap="3px">
              <Typography
                variant="body_bold"
                textAlign="left"
                paddingLeft="8px"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                @user123456789
              </Typography>
              <Typography
                variant="body_thin"
                textAlign="left"
                paddingLeft="8px"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                Wow... time to visit this new cafe!
              </Typography>
            </Stack>
          </Stack>
        </div>
      </div>


      </main>
    );
  }
  