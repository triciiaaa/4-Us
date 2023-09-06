"use client";

import * as React from "react";
import { Stack, Button } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <Stack direction="row" gap="20px" justifyContent="center" paddingY="20px" bgcolor="#aaaaaa">
      <Button variant="text">Following</Button>
      <Button variant="text">For You</Button>
      <Button onClick={() => router.push('/for-us')}>For Us</Button>
    </Stack>
  );
}
