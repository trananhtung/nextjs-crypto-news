import { styled } from '@mui/system';

export const Background = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  marginBottom: '4rem',
  padding: '5rem 2rem',

  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  borderRadius: '1rem',
});
