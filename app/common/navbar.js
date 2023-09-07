"use client";

import Link from "next/link";
import { Stack } from "@mui/material";
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
        alignItems="center"
      >
        <Link
          href=""
          style={{
            color: theme.palette.white.main,
          }}
        >
          Following
        </Link>
        <Link
          href=""
          style={{
            color: theme.palette.white.main,
          }}
        >
          For You
        </Link>
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
