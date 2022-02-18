import { FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
export const SectionHeading: FC<Props> = ({ children }) => {
  return (
    <Typography variant="h4" color="info.dark" sx={{ mb: '2rem' }}>
      {children}
    </Typography>
  );
};
