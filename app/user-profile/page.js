"use client"

import React, { useState } from 'react'; 
import Image from 'next/image'
import styles from '../page.module.css'
import { Avatar } from '@mui/material'
import { useRouter } from 'next/navigation'
import { IconButton, Stack, Typography, CardMedia, Box, Checkbox, FormControlLabel, Grid, Paper, } from "@mui/material"; 
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function UserProfile() {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const textStyle = {
    color: "white",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const [selectedImages, setSelectedImages] = useState([true, true, true, true, true, false]);

  const images = [
    '/product1.jpg',
    '/product2.jpg',
    '/product3.jpg',
    '/product4.jpg',
    '/product5.jpg',
    '/product6.jpg',
  ];

  return (
    <main className={styles.main}>
    <Stack
      direction="column"
      alignItems="center"
    >
      <Box 
        display="flex"
        justifyContent="top"  // Horizontally center the image
        alignItems="top"      // Vertically center the image
        height="240px"           // Set the desired height
        paddingTop="40px"
        paddingRight="80px"
      >
      <Image
        src="/person1.png"
        width={150}
        height={150}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        alt="Preview"
      />
      <Stack>
      <Typography
        variant="body_bold"
        textAlign="left"
        paddingTop="35px"
        paddingLeft="20px"
        fontSize="30px"
      >
        NAME
      </Typography>
      <Typography
        variant="body"
        textAlign="left"
        paddingLeft="20px"
        fontSize="25px"
      >
        @user100
      </Typography>
    </Stack>
    </Box>

    <Stack direction="row" alignItems="center">
    <Image
      src="/wishlist_icon.jpg"
      width={50}
      height={50}
      style={{ borderRadius: "10px" }}
      alt="Preview"
      onClick={() => router.push('/user-profile/wishlist')}
    />
    <Typography
        variant="body"
        textAlign="left"
        paddingLeft="10px"
        fontSize="25px"
      >
        My Wishlist
    </Typography>
    </Stack>
    </Stack>
    <Stack direction="column" paddingTop="20px" gap="20px" alignItems="center">
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={4} key={index}>
          <Paper elevation={5}>
            <Image
              src={image}
              width={50}
              height={60}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onClick={() => router.push('/user-profile')}/>

            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Product</DialogTitle>
            <DialogContent>
              {/* Add your content here */}
              <Stack direction="column" gap="20px">
              <Image
                src={image}
                width={300}
                height={350}
                alt={`Image ${index + 1}`}
              />
              <Button variant="outlined" color="primary" onClick={() => router.push('/user-profile/product')}>
              Fulfill the wish!
              </Button>
              </Stack>

              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            <Checkbox
              checked={selectedImages[index]}
              onChange={() => handleCheckboxChange(index)}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
    <Typography
        variant="body"
        textAlign="left"
        paddingLeft="20px"
        fontSize="15px"
      >
        View More ...
    </Typography>
    </Stack>
    </main>
  )
}
