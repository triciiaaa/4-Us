"use client"

import Image from "next/image";
import styles from "../page.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function ForUs() {
  const router = useRouter()
  
  return (
    <main className={styles.main}>
      <div>For Us Page</div>
      <IconButton aria-label="add" onClick={() => router.push('/for-us/create-group')}>
        <AddCircleIcon />
      </IconButton>
    </main>
  );
}
