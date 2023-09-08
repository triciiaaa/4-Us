"use client";

import Image from "next/image";
import styles from "../page.module.css"
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";

export default function ForUsHeader() {
  const router = useRouter();

  return (
    <Stack display="flex" alignItems="center" gap="5px" paddingY="20px">
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="5px"
      >
        <Typography
          variant="h2"
          textAlign="center"
          style={{
            paddingTop: "30px",
            fontWeight: "bold",
          }}
        >
          For Us
        </Typography>
        <Image
          src="/star.jpg"
          width={20}
          height={20}
          style={{ marginBottom: "0px" }}
          alt="Preview"
        />
      </Stack>
      <Image src="/line.jpg" width={100} height={15} alt="Preview" />
    </Stack>
  );
}
