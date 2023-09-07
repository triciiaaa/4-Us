"use client";

import Image from "next/image";
import styles from "../page.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton, Typography, Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function ForUs() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <Box
        justifyContent="space-between"
        sx={{ bgcolor: theme.palette.white.main }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          For Us
        </Typography>
        <Stack direction="row" justifyContent="center" gap="10px">
          <Image
            src="/cafe.jpg"
            width={200}
            height={270}
            style={{ borderRadius: "10px" }}
            alt="Preview"
          />
          <Image
            src="/cafe.jpg"
            width={200}
            height={270}
            style={{ borderRadius: "10px" }}
            alt="Preview"
          />
        </Stack>
        <Box position="absolute" bottom="80px" marginLeft="350px">
          <IconButton
            aria-label="add"
            onClick={() => router.push("/for-us/create-group")}
          >
            <AddCircleIcon />
          </IconButton>
        </Box>
      </Box>
    </main>
  );
}
