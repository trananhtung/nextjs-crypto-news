import { Typography, Button, useTheme } from '@mui/material';

import { Background } from './Style';
import { useDictionary } from '../../hooks/useDictionary';

export const Hero = () => {
  const theme = useTheme();
  const dictionary = useDictionary();
  return (
    <Background>
      <Typography variant="h1" align="center" color="dark" sx={{ fontWeight: 900 }}>
        {dictionary.heroTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="dark"
        style={theme.normalText?.fs4}
        sx={{ fontWeight: 400, fontStyle: 'italic', mt: 3 }}
      >
        {dictionary.heroSubtitle}
      </Typography>
      <Button variant="contained" color="warning" size="large" sx={{ mt: 3, p: 1 }}>
        {dictionary.heroButton}
      </Button>
    </Background>
  );
};
