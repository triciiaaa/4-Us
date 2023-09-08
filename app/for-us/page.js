"use client";

import styles from "../page.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import ForUsHeader from "./for-us-header";
import ForUsGroup1 from "./for-us-group1";
import ForUsGroup2 from "./for-us-group2";

export default function ForUs() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <Stack direction="row" gap="100px">
        <IconButton
          aria-label="back"
          onClick={() => router.push("/")}
          sx={{ marginLeft: "10px", color: theme.palette.blue.main }}
        >
          <ArrowBackIosIcon fontSize="medium" />
        </IconButton>
        <ForUsHeader />
      </Stack>

      {/* previews */}
      <Stack direction="row" justifyContent="center" gap="10px">
        <ForUsGroup1 />
        <ForUsGroup2 />
      </Stack>

      {/* add button */}
      <IconButton
        aria-label="add"
        onClick={() => router.push("/for-us/create-group")}
        sx={{
          color: theme.palette.blue.main,
          marginLeft: "350px",
          marginTop: "230px",
        }}
      >
        <AddCircleIcon fontSize="large" />
      </IconButton>
    </main>
  );
}
