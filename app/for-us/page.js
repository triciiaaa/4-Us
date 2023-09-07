"use client";

import Image from "next/image";
import styles from "../page.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  IconButton,
  Typography,
  Box,
  Stack,
  Avatar,
  AvatarGroup,
} from "@mui/material";
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
        <Stack direction="row" gap="100px">
          <IconButton
            aria-label="back"
            onClick={() => router.push("/")}
            sx={{ marginLeft: "10px",
              color: theme.palette.blue.main }}
          >
            <ArrowBackIosIcon fontSize="medium" />
          </IconButton>

          {/* header */}
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
        </Stack>

        {/* previews */}
        <Stack direction="row" justifyContent="center" gap="10px">
          {/* group 1 */}
          <Stack gap="5px">
            <Image
              src="/group1.jpg"
              width={200}
              height={330}
              style={{ borderRadius: "5px" }}
              alt="Preview"
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

          {/* group 2 */}
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
        </Stack>

        {/* add button */}
        <Box position="absolute" bottom="80px" marginLeft="360px">
          <IconButton
            aria-label="add"
            onClick={() => router.push("/for-us/create-group")}
            sx={{ color: theme.palette.blue.main }}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </main>
  );
}
