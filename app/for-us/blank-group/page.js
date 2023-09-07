"use client"

import Image from 'next/image'
import styles from '../../page.module.css'
import { Avatar } from '@mui/material'
import { useRouter } from 'next/navigation'
import { IconButton } from "@mui/material";
import RedeemIcon from '@mui/icons-material/Redeem';

export default function BlankGroup() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div>Blank Group Page</div>
      <Avatar onClick={() => router.push('/user-profile')}>H</Avatar>
      <IconButton aria-label="present" onClick={() => router.push('/for-us/new-group/exchanges')}>
        <RedeemIcon />
      </IconButton>
    </main>
  )
}
