"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './common/navbar'
import { IconButton, useRadioGroup } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <Navbar />
      <div>Home Page</div>
      <IconButton aria-label="like" onClick={() => router.push('/tiktok-shop')}>
        <FavoriteBorderIcon />
      </IconButton>

    </main>
  )
}
