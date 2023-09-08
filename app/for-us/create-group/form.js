import Image from "next/image";
import styles from "../../page.module.css";
import { Typography, TextField, Stack, Box, Avatar } from "@mui/material";
import UserMultiSelect from "../../for-us/create-group/user-multi-select";
import { blue } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import ClickableAvatar from "./clickable-avatar";

export default function Form() {
  const theme = useTheme();

  return (
    <Stack display="flex" alignItems="center" gap="30px">
      <Image
        src="/friends.png"
        width={150}
        height={100}
        style={{ marginBottom: "0px" }}
        alt="Preview"
      />
      <TextField
        id="standard-search"
        label=""
        type="search"
        variant="standard"
        sx={{ width: "200px" }}
        InputProps={{
          sx: {
            "& input": {
              textAlign: "center",
            },
          },
        }}
        placeholder="Group Name"
      />
      <Stack
        sx={{
          bgcolor: theme.palette.blue.light,
          width: "350px",
          height: "400px",
          borderRadius: "10px",
          alignItems: "flex-start",
          gap: "20px",
          padding: "30px"
        }}
      >
        <Typography
          variant="body_bold"
          textAlign="center"
          style={{
            fontWeight: "bold",
          }}
        >
          Add Members
        </Typography>
        <UserMultiSelect />
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <ClickableAvatar user="H"/>
          <ClickableAvatar user="N"/>
          <ClickableAvatar user="S"/>
          <ClickableAvatar user="T"/>
        </Stack>
      </Stack>
    </Stack>
  );
}
