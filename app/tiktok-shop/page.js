"use client" 

import * as React from 'react';
import Image from 'next/image'
import styles from '../page.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button, Typography, TextField, Stack } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




  

export default function TiktokShop() {

const [privacy, setPrivacy] = React.useState('');

const handleChange = (event) => {
    setPrivacy(event.target.value || '');
};
  return (
    <main className={styles.main}>
       <Typography
          variant="h2"
          textAlign="center"
          style={{
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
          >
          Tiktok Shop
      </Typography>

      <Container maxWidth="xl">
        <Card sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <CardContent>
          <CardMedia
          component="img"
          height="500"
          image="/serum.jpg"
          alt="Serum"
          />
         <CardContent>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Add to Wishlist</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={privacy}
          label="Privacy"
          onChange={handleChange}
        >
          <MenuItem value={1}>Private</MenuItem>
          <MenuItem value={2}>Public</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
        </CardContent>   
          </CardContent>
        </Card>
      </Container>

      



      

    </main>
  )
}
