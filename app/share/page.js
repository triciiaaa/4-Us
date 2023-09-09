"use client";


import * as React from 'react';
import styles from "../page.module.css";
import { IconButton, CardMedia, Box, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";



export default function Share() {
  const router = useRouter();
  const [share, setShare] = React.useState('');

const handleChange = (event) => {
    setShare(event.target.value || '');
}

  return (
    <main className={styles.main}>
      <IconButton
      aria-label="back"
      onClick={() => router.push("/")}
      sx={{ marginLeft: "10px"}}
    >
      <ArrowBackIosIcon fontSize="medium" />
      </IconButton>

        <Container maxWidth="xl">
        <Card sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <CardContent>
          <CardMedia
          component="img"
          height="400"
          image="/Cafe3.jpg"
          alt="Cafe"
          />

            <CardContent>
                <CardMedia
                    component="img"
                    height="200px"
                    maxWidth="xl"
                    image="/card5.jpg"
                    alt="card5"
                    />
         <CardContent>            

        <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Repost</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={share}
                label="Share"
                onChange={handleChange}
            >
            <MenuItem value={1}>Cafe Buddies</MenuItem>
            <MenuItem value={2}>concertpals</MenuItem>

            </Select>
            </FormControl>
        </Box>
        </CardContent>   
          </CardContent>
          </CardContent>
        </Card>
      </Container>

    </main>
  );
}