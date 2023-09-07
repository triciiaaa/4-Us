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
import UserMultiSelect from "../../for-us/create-group/user-multi-select";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";

export default function CreateGroup() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <main className={styles.main}>
      <Stack direction="row" gap="45px">
        <IconButton
          aria-label="back"
          onClick={() => router.push("/for-us")}
          sx={{ marginLeft: "10px", color: theme.palette.blue.main }}
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
              Create a group
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

      <Stack display="flex" alignItems="center" gap="40px" marginTop="60px">
        <Stack gap="20px">
          <Typography variant="body_bold">Group Name</Typography>
          <TextField
            id="standard-search"
            label=""
            type="search"
            variant="standard"
            sx={{ width: "300px" }}
          />
        </Stack>
        <Stack gap="20px">
          <Typography variant="body_bold">Users to Invite</Typography>
          <UserMultiSelect />
        </Stack>
      </Stack>
      <Box position="absolute" bottom="80px" marginLeft="250px">
        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.blue.main,
            "&:hover": {
              bgcolor: theme.palette.blue.dark,
            },
          }}
          onClick={() => router.push("/for-us/blank-group")}
        >
          Create Group
        </Button>
      </Box>
    </main>
  );
}
