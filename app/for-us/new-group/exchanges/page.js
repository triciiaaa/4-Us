"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Image from 'next/image'
import styles from '../../../page.module.css'
import { useRouter } from 'next/navigation'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton, Grid } from "@mui/material";

const images = [
  {
    url: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    title: "Secret Santa Exchange",
    width: "400px",
    height: "100px",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 150,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 100%",
});

const ImageStyle = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Exchanges() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <IconButton
      aria-label="back"
      onClick={() => router.push("/for-us/new-group")}
      sx={{ marginLeft: "10px"}}
    >
      <ArrowBackIosIcon fontSize="medium" />
      </IconButton>

      <IconButton aria-label="add" onClick={() => router.push('/for-us/new-group/create-exchange')}>
        <AddCircleIcon />
      </IconButton>
      <Typography variant="h1" align="center">
        Your Gift Exchanges
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        {images.map((image) => (
          <Grid item key={image.title}>
            <ImageButton
              focusRipple
              style={{
                width: image.width,
              }}
              onClick={() => router.push('/for-us/new-group/exchange-profile')}
            >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <ImageStyle>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </ImageStyle>
            </ImageButton>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
