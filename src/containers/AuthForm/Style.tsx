import { styled } from '@mui/system';

export const FormWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '20rem',
  margin: '5rem auto',
  padding: '2rem',
  border: '2px solid #f5f5f5',
  borderRadius: '2rem',
  background: theme.palette.background.paper,
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
}));

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));
