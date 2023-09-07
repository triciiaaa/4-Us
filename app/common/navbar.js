"use client";

import Link from "next/link";
import { Stack, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <Stack
        minWidth="428px"
        direction="row"
        gap="20px"
        justifyContent="center"
        paddingY="20px"
        alignItems="flex-start"
      >
        <Link
          href=""
          style={{
            color: theme.palette.white.main,
          }}
        >
          Following
        </Link>

        <Stack display="flex" alignItems="center" gap="5px">
          <Link
            href=""
            style={{
              color: theme.palette.white.main,
              fontWeight: theme.typography.body_bold.fontWeight,
            }}
          >
            For You
          </Link>
          <Box
            sx={{
              width: 40,
              height: 3,
              backgroundColor: theme.palette.white.main,
            }}
          />
        </Stack>

        <Link
          href="/for-us"
          style={{
            color: theme.palette.white.main,
          }}
        >
          For Us
        </Link>
      </Stack>
    </>
  );
}
