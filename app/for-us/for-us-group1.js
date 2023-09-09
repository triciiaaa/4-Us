"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";

export default function ForUsGroup1() {
  const router = useRouter();

  return (
    <Stack gap="5px">
      <Image
        src="/group1.jpg"
        width={200}
        height={330}
        style={{ borderRadius: "5px" }}
        alt="Preview"
        onClick={() => router.push("/for-us/new-group")}
      />
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body_bold">Cafe Buddies</Typography>
        <Image src="/avatar1.jpg" width={80} height={40} alt="Preview" />
      </Stack>
    </Stack>
  );
}
