"use client";

import * as React from 'react'; 
import Image from 'next/image'
import styles from '../../page.module.css'
import { Button, Typography, TextField, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system'; 
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';






  
export default function Wishlist() {
  const theme = useTheme();

  const CenteredCardContainer = styled('div')({ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '400v', 
    padding: 15
  }); 

  // const img = () => {
  //   const imgStyle = { width: '500px', height: '600px' };
  // }


  return (
    <main className={styles.main}>
      {/*<h1> Wishlist</h1>/*}
      {/* <Box
        justifyContent="space-between"
        sx={{ bgcolor: theme.palette.white.main }}
      > */}


      <Typography
          variant="h2"
          textAlign="center"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
          >
          Wishlist 
      </Typography>



      <CenteredCardContainer> 
      <Card sx={{ width: '250px' }}>
      <CardActionArea>
         <CardMedia
          component="img"
          height="200"
          image="/serum2.jpg"
          alt="Axis-Y Serum..."
          /> 
          
        <CardContent>
          {/* <Typography gutterBottom variant="h6" component="div">
            Axis-Y Serum...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $19.80
          </Typography> */}
          {/* <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton> */}
          <Stack direction="row" justifyContent="flex-end">
            <div className="content"> 
            <Typography gutterBottom variant="h6" component="div">
            Axis-Y Serum...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $19.80
          </Typography> </div>
          
            <div className="icon-button">
            <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          </div>
        </Stack>
        </CardContent>  
      </CardActionArea>
      </Card>
      </CenteredCardContainer> 


      <CenteredCardContainer> 
      <Card sx={{ width : '250px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/ampoule.jpg"
          alt="Axis-Y Ampoule..."
          />
        <CardContent>
        <Stack direction="row" justifyContent="flex-end">
            <div className="content"> 
            <Typography gutterBottom variant="h6" component="div">
            Axis-Y Ampoule...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $18.72
          </Typography> </div>
          
            <div className="icon-button">
            <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          </div>
        </Stack>
        </CardContent>
      </CardActionArea>
      </Card>
      </CenteredCardContainer> 
      

      <CenteredCardContainer> 
      <Card sx={{ width : '250px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="/bag1.png"
          alt="White Tote Bag"
          />
        <CardContent>
          
          <Stack direction="row" justifyContent="flex-end">
            <div className="content"> 
            <Typography gutterBottom variant="h6" component="div">
            White Tote Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $13.80
          </Typography></div>
          
            <div className="icon-button">
            <IconButton aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          </div>
        </Stack>
        </CardContent>
      </CardActionArea>
      </Card>
      </CenteredCardContainer> 


      
      
    </main>
  )
}

