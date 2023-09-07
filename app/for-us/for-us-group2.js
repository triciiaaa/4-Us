"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";

export default function ForUsGroup2() {
  const router = useRouter();

  return (
    <Stack gap="5px">
      <Image
        src="/group2.jpg"
        width={200}
        height={330}
        alt="Preview"
        style={{ borderRadius: "5px" }}
      />
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body_bold">concertpals</Typography>
        <Image src="/avatar2.jpg" width={60} height={40} alt="Preview" />
      </Stack>
    </Stack>
  );
}
