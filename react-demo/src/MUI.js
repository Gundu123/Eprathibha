import React from 'react';
import { Card, CardMedia, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import sampleImage from './image1.jpg'; // Update the path as needed

const MyComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="Sample Image"
          height="400"
          width="100%"
          image={sampleImage}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 150,
            left: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '16px',
            borderRadius: '4px',
            width: 300,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" color="blue" sx={{ marginBottom: '8px' }}>
            We are
          </Typography>
          <Typography variant="h4" color="error" sx={{ marginBottom: '8px' }}>
            Extensive.
          </Typography>
          <Typography variant="h6" color="white">
            Helping you stand out in a crowded market
          </Typography>
        </Box>
      </Card>
      <Typography
        sx={{
          position: 'absolute',
          top: 500,
          left: 50,
          padding: '16px',
          color: 'black',
          fontSize: '10px',
          backgroundColor: 'white',
          borderRadius: '1px',
        }}
      >
        WHO WE ARE
      </Typography>
      <Typography
        sx={{
          position: 'absolute',
          top: 550,
          left: 60,
          color: 'skyblue',
          fontSize: isMobile ? '32px' : '50px',
          backgroundColor: 'white',
        }}
      >
        We are Extensive.
      </Typography>
      <Typography
        sx={{
          position: 'absolute',
          top: 630,
          left: 60,
          color: 'black',
          fontSize: isMobile ? '10px' : '17px',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.velit officia
        consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '20px',
          top: 680,
          left: 50,
          backgroundColor: 'skyblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" color="white">
          BOOK A FREE MARKETING AUDIT
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 800,
          left: 50,
        }}
      >
        <Grid container spacing={isDesktop ? 4 : (isMobile ? 2 : 1)}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'skyblue',
                padding: '16px',
                borderRadius: '40px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              <Typography variant="h5">WHAT <br></br>WE DO</Typography>
              <Typography>
                {isMobile
                  ? 'We do lots of stuffs, basically adding value to your product'
                  : 'We do lots of stuffs, basically adding value to your product'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '16px',
                borderRadius: '4px',
                width: '100%',
              }}
            >
              <Typography>Digital Marketing</Typography>
              <Typography>Digital Marketing</Typography>
              <Typography>Digital Marketing</Typography>
              <Typography>Digital Marketing</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyComponent;
