"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import {
  Button,
  Typography,
  TextField,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";
import CreateGroupHeader from "./create-group-header";
import Form from "./form";

export default function CreateGroup() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <Stack direction="row" gap="65px">
        <IconButton
          aria-label="back"
          onClick={() => router.push("/for-us")}
          sx={{ marginLeft: "10px", color: theme.palette.blue.main }}
        >
          <ArrowBackIosIcon fontSize="medium" />
        </IconButton>
        <CreateGroupHeader />
      </Stack>

      {/* user form */}
      <Form />

      {/* create group button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: theme.palette.blue.main,
          "&:hover": {
            bgcolor: theme.palette.blue.dark,
          },
          marginLeft: "240px",
          marginTop: "20px"
        }}
        onClick={() => router.push("/for-us/blank-group")}
      >
        Create Group
      </Button>
    </main>
  );
}
