import { useMediaQuery, useTheme } from '@mui/material';

export const useMedia = () => {
  const theme = useTheme();
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

  const xlUp = useMediaQuery(theme.breakpoints.up('xl'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const xsUp = useMediaQuery(theme.breakpoints.up('xs'));

  return { xlDown, lgDown, mdDown, smDown, xsDown, xlUp, lgUp, mdUp, smUp, xsUp };
};
