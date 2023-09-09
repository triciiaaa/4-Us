"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./common/navbar";
import {
  IconButton,
  CardMedia,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReplyIcon from "@mui/icons-material/Reply";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <div className={styles.landingImage}>
        <CardMedia
          component="img"
          image={"/cafe.jpg"}
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
          <Navbar />
          <Stack gap="20px">
            <Stack
              marginLeft="350px"
              marginTop="240px"
              gap="10px"
              direction="flex"
              flexDirection="column"
              alignItems="center"
            >
              {/* profile */}
              <Avatar>D</Avatar>

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
                  <FavoriteIcon fontSize="large"/>
                </IconButton>
                <Typography
                  variant="tiny_tag_bold"
                  style={{
                    color: theme.palette.white.main,
                  }}
                >
                  2711
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
                  <TextsmsIcon fontSize="large"/>
                </IconButton>
                <Typography
                  variant="tiny_tag_bold"
                  style={{
                    color: theme.palette.white.main,
                  }}
                >
                  28
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
                  <BookmarkIcon fontSize="large"/>
                </IconButton>
                <Typography
                  variant="tiny_tag_bold"
                  style={{
                    color: theme.palette.white.main,
                  }}
                >
                  172
                </Typography>

                {/* send */}
                <IconButton
                  aria-label="share"
                  style={{
                    color: theme.palette.white.main,
                  }}
                  onClick={() => router.push("/share")}
                >
                  <ReplyIcon fontSize="large"/>
                </IconButton>
                <Typography
                  variant="tiny_tag_bold"
                  style={{
                    color: theme.palette.white.main,
                  }}
                >
                  81
                </Typography>
              </Stack>
            </Stack>

            {/* caption */}
            <Stack>
              <Typography
                variant="body_bold"
                textAlign="left"
                paddingLeft="30px"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                user123456789
              </Typography>
              <Typography
                variant="body_thin"
                textAlign="left"
                paddingLeft="30px"
                style={{
                  color: theme.palette.white.main,
                }}
              >
                SPONSORED BY CORRECTING GLOW SERUM
              </Typography>
            </Stack>
            <Image
              src="/tiktok-navbar.png"
              width={428}
              height={60}
              alt="Preview"
            />
          </Stack>
        </div>
      </div>
    </main>
  );
}
