import Image from 'next/image';
import Router from 'next/router';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ErrorImage from '/assets/error/error.png';

export const Error404 = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2" color="error" sx={{ textTransform: 'uppercase', mb: '2rem' }}>
        Not Found 404 PAGE
      </Typography>
      <Box sx={{ mb: '2rem' }}>
        <Image src={ErrorImage} alt="404" width={300} height={300} />
      </Box>
      <Button
        variant="outlined"
        color="error"
        size="large"
        onClick={() => {
          Router.push('/');
        }}
      >
        HOME PAGE
      </Button>
    </Box>
  );
};
