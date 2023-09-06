"use client"

import Image from 'next/image'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function UserProfile() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div>User Profile Page</div>
      <IconButton aria-label="add" onClick={() => router.push('/user-profile/wishlist')}>
        <ShoppingBasketIcon />
      </IconButton>
    </main>
  )
}
