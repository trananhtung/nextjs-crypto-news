import { styled } from '@mui/system';

export const NavLink = styled('a')({
  textDecoration: 'none',
  fontWeight: 600,
  textTransform: 'capitalize',

  padding: '0.5rem',
  color: '#000',

  cursor: 'pointer',

  '&:hover': {
    color: '#fff',
    backgroundColor: '#3e3e3e',
    borderRadius: '0.5rem',
  },
});

export const MenuItemLink = styled('a')({
  minWidth: '5rem',
  textTransform: 'capitalize',
  textDecoration: 'none',
  color: '#000',
});

export const Branch = styled('a')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: '#000',
  margin: 0,
  padding: 0,
});

export const LinkContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
});
