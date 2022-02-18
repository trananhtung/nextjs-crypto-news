import { styled } from '@mui/system';
import { Theme, Divider } from '@mui/material';
import Link from '@mui/material/Link';

interface Props {
  theme: Theme;
}

export const FooterContainer = styled('footer')(({ theme }) => ({
  minHeight: '8rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: '1rem',
}));

export const FooterLink = styled(Link)({
  '&:hover': {
    transform: 'scale(1.3)',
  },
});

export const FooterDivider = styled(Divider)(({ theme }) => ({
  margin: '1rem auto',
  backgroundColor: theme.palette.grey[300],
}));
