import { styled } from '@mui/system';

export const Wrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  [`@media (max-width: ${theme.breakpoints.values.md})`]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));
