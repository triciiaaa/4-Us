"use client";

import Image from "next/image";
import styles from "../page.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function ForUs() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <Box
        textAlign="center"
        justifyContent="space-between"
        sx={{ bgcolor: theme.palette.white.main }}
      >
        <Typography
          variant="h2"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          For Us
        </Typography>
        
        <Box position="absolute" bottom="30px" marginLeft="350px">
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
