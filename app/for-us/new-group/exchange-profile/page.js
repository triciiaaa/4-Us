"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Image from "next/image";
import styles from "../../../page.module.css";
import { useRouter } from "next/navigation";

const CenteredCardContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100v",
});

const CardWrapper = styled(Card)({
  maxWidth: 400,
  padding: "16px",
});

const buttonStyles = {
  backgroundColor: 'rgba(255, 0, 80)',
};

export default function ExchangeProfile() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <IconButton
      aria-label="back"
      onClick={() => router.push("/for-us/new-group/exchanges")}
      sx={{ marginLeft: "10px"}}
    >
      <ArrowBackIosIcon fontSize="medium" />
      </IconButton>

      <CenteredCardContainer>
        <CardWrapper>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="Secret Santa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Secret Santa Exchange
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our annual Chirstmas Gift Exchange !! Budget is $20 and we'll
                have our exchange on 30 December 2023 :)
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardWrapper>
      </CenteredCardContainer>

      <Stack spacing={2}>
        <Button variant="contained" sx={buttonStyles} onClick={() => router.push('/user-profile/wishlist')}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={2}
          >
            {/* Text */}
            <Typography variant="h6" sx={{ textTransform: 'none' }}>Your drawn name is</Typography>

            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              sx={{ width: 60, height: 60, marginTop: 1 }}
            />

            {/* Name */}
            <Typography variant="subtitle1" sx={{ textTransform: 'none' }}>Tricia</Typography>

            {/* Username */}
            <Typography variant="subtitle1" sx={{ textTransform: 'none' }}>@tricia_angg</Typography>
          </Box>
        </Button>
      </Stack>

      <Box display="flex" flexDirection="column" padding={2}>
        {/* Text */}
        <Typography variant="subtitle1">
          Members participating in this exchange
        </Typography>

        <Box display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1500395235658-f87dff62cbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              sx={{ width: 50, height: 50, marginTop: 1 }}
            />

            {/* Name */}
            <Typography variant="subtitle2">Hui Ling</Typography>

            {/* Username */}
            <Typography variant="subtitle2">@hui_lingg</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1633279309534-f761427548b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              sx={{ width: 50, height: 50, marginTop: 1 }}
            />

            {/* Name */}
            <Typography variant="subtitle2">Nurin</Typography>

            {/* Username */}
            <Typography variant="subtitle2">@nurin_adilah</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1527495666590-898fee64eb89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              sx={{ width: 50, height: 50, marginTop: 1 }}
            />

            {/* Name */}
            <Typography variant="subtitle2">Shir Er</Typography>

            {/* Username */}
            <Typography variant="subtitle2">@shir_err</Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
