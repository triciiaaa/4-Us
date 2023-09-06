"use client" 

import Image from 'next/image'
import styles from '../../page.module.css'
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function CreateGroup() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div>Create Group Page</div>
      <Button onClick={() => router.push('/for-us/new-group')}>Create Group</Button>
    </main>
  )
}
