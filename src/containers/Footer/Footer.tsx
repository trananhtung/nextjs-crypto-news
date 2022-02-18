import { memo } from 'react';
import { Home, Instagram, Facebook, GitHub, Twitter } from '@mui/icons-material';
import { Container, Divider, Grid, Typography } from '@mui/material';

import { FooterContainer, FooterLink, FooterDivider } from './Style';
import { socialMedia } from '../../constants';

const Component = () => {
  const { instagram, facebook, github, twitter } = socialMedia;

  return (
    <Container>
      <FooterDivider />
      <FooterContainer>
        <Grid container spacing={2} sx={{ gap: '1rem' }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" gap="2rem">
            <FooterLink href="/">
              <Home />
            </FooterLink>
            <FooterLink href={instagram}>
              <Instagram />
            </FooterLink>
            <FooterLink href={facebook}>
              <Facebook />
            </FooterLink>
            <FooterLink href={github}>
              <GitHub />
            </FooterLink>
            <FooterLink href={twitter}>
              <Twitter />
            </FooterLink>
          </Grid>
          <Grid container justifyContent="center">
            <Typography
              variant="subtitle2"
              color="#000"
              align="center"
              sx={{ fontFamily: 'monospace' }}
            >
              Powered by: Asnet ©{new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </FooterContainer>
    </Container>
  );
};

export const Footer = memo(Component);
