"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import { Button, Typography, TextField, Stack, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import UserMultiSelect from '../../for-us/create-group/user-multi-select'

export default function CreateGroup() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Typography
        variant="h2"
        textAlign="center"
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        Create a group
      </Typography>
      <Stack display="flex" alignItems="center" gap="20px">
        <Stack>
          <Typography variant="body_bold">Group Name</Typography>
          <TextField
            id="standard-search"
            label=""
            type="search"
            variant="standard"
            sx={{ width: "300px" }}
          />
        </Stack>
        <Stack>
          <Typography variant="body_bold">Users to Invite</Typography>
        <UserMultiSelect/>
        </Stack>
      </Stack>
      <Box position="absolute" bottom="80px" marginLeft="250px">
      <Button variant="contained" onClick={() => router.push("/for-us/blank-group")}>
        Create Group
      </Button>
      </Box>
    </main>
  );
}
