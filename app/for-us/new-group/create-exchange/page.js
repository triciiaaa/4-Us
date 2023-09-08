"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Image from "next/image";
import styles from "../../../page.module.css";
import { useRouter } from "next/navigation";
import { PaddingOutlined } from '@mui/icons-material';

export default function CreateExchange() {
  const router = useRouter();

  const boxStyle = {
    padding: '7px', // Add padding as needed
    }
  
  const buttonStyle = {
    border: '1px solid black', // Outline style with black border
    backgroundColor: 'transparent', // Transparent background
    opacity: 0.9, // Initial opacity
    '&:hover': {
      opacity: 1, // Increase opacity on hover
    },
    display: 'flex', // Make the button's content a flex container
    justifyContent: 'flex-start', // Align content to the left
    alignItems: 'center', // Center content vertically
    gap: '8px', // Add some spacing between icon and text (adjust as needed)
  };

  return (
    <main className={styles.main}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Start a Gift Exchange
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Gift Exchange Name
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          Enter group name
        </Typography>
      </Paper>

      <Box padding={1} style={boxStyle}>
        <Typography variant="subtitle1">
          Who would you like to add?
        </Typography>
      </Box>
          
          <Box display="flex" flexDirection="column" padding={1}>
          <Button variant="outlined" sx={buttonStyle}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1500395235658-f87dff62cbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />

            {/* Username */}
            <Typography variant="subtitle1" style={{ textTransform: 'none', color: 'black' }}>@hui_lingg</Typography>
          </Box>
          </Button>

          <Button variant="outlined" sx={buttonStyle}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1633279309534-f761427548b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />

            {/* Username */}
            <Typography variant="subtitle1" style={{ textTransform: 'none', color: 'black' }}>@nurin_adilah</Typography>
          </Box>
          </Button>

          <Button variant="outlined" sx={buttonStyle}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1527495666590-898fee64eb89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />

            {/* Username */}
            <Typography variant="subtitle1" style={{ textTransform: 'none', color: 'black' }}>@shir_err</Typography>
          </Box>
          </Button>

          <Button variant="outlined" sx={buttonStyle}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding={2}
          >
            {/* Picture */}
            <Avatar
              alt="User Profile Picture"
              src="https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              sx={{ width: 60, height: 60, marginRight: 2 }}
            />

            {/* Username */}
            <Typography variant="subtitle1" style={{ textTransform: 'none', color: 'black' }}>@anna_kim</Typography>
          </Box>
          </Button>

        </Box>
        <Container maxWidth="lg">
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Create Group
        </Button>
      </Box>
    </Container>
        </Container>
      </div>
    </main>
  );
}
