"use client";

import styles from "./page.module.css";
import Navbar from "./common/navbar";
import { IconButton, CardMedia } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.landingImage}>
        <CardMedia
          style={{ minHeight: "100vh" }}
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
          <IconButton
            aria-label="like"
            onClick={() => router.push("/tiktok-shop")}
          >
            <FavoriteBorderIcon />
          </IconButton>

          {/* <IconButton aria-label="add" onClick={() => router.push('/share')}>
        <CollectionsBookmarkIcon />
      </IconButton> */}
        </div>
      </div>
    </main>
  );
}
