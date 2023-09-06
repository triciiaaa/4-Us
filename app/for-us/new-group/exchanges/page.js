"use client"

import Image from 'next/image'
import styles from '../../../page.module.css'
import { useRouter } from 'next/navigation'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

export default function Exchanges() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div>Exchanges Page</div>
      <IconButton aria-label="add" onClick={() => router.push('/for-us/new-group/create-exchange')}>
        <AddCircleIcon />
      </IconButton>
    </main>
  )
}
