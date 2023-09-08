"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link"
import styles from "../../page.module.css";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import { IconButton, Stack, Typography, CardMedia } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReplyIcon from "@mui/icons-material/Reply";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function BlankGroup() {
  const router = useRouter();
  const theme = useTheme();

  const textStyle = {
    color: "white",
  };

  return (
    <main className={styles.main}>
      <Stack gap="15px">
        <Stack direction="row" alignItems="center" gap="5px">
          <IconButton
            aria-label="back"
            onClick={() => router.push("/for-us")}
            sx={{ marginLeft: "10px", color: theme.palette.blue.main }}
          >
            <ArrowBackIosIcon fontSize="medium" />
          </IconButton>
          <Typography
            variant="h3"
            fontSize={30}
            align="center"
            style={{
              color: theme.palette.black.main,
            }}
            paddingLeft="5px"
          >
            Group Name
          </Typography>

          <IconButton
            aria-label="present"
            onClick={() => router.push("/for-us/new-group/exchanges")}
            style={{
              color: theme.palette.black.main,
              paddingLeft: "100px",
            }}
          >
            <RedeemIcon fontSize="large" />
          </IconButton>
        </Stack>

        <Stack direction="row" gap="20px">
          <Image
            src="/person1.png"
            width={80}
            height={80}
            style={{ borderRadius: "10px" }}
            alt="Preview"
            onClick={() => router.push("/user-profile")}
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
        <Image
          src="/no-videos.png"
          width={155}
          height={150}
          style={{ borderRadius: "10px", marginTop: "150px", marginLeft: "140px" }}
          alt="Preview"
        />
        <Typography
          variant="body_bold"
          align="center"
          style={{
            color: theme.palette.black.main,
          }}
          paddingLeft="5px"
        >
          No videos reposted.
        </Typography>
        <Link href="/" align="center">
        <Typography
          variant="tag_bold"
          style={{
            color: theme.palette.blue.dark,
          }}
          paddingLeft="5px"
        >
          Return to For You Page
        </Typography>
        </Link>
        <Image
          src="/tiktok-navbar.png"
          width={428}
          height={60}
          alt="Preview"
          style={{ marginTop: "200px" }}
        />
      </Stack>
    </main>
  );
}
