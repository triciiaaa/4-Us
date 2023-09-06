"use client"

import Image from 'next/image'
import styles from '../../../page.module.css'
import { useRouter } from 'next/navigation'

export default function CreateExchange() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div>Create Exchange Page</div>
    </main>
  )
}
