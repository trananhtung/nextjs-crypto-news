import { FC } from 'react';
import { Grid } from '@mui/material';
import { CoinCard } from './CoinCard';
import { CoinByUuids } from '../../interfaces';

interface Props {
  uuids: (keyof CoinByUuids)[];
}

export const CoinCards: FC<Props> = ({ uuids }) => {
  return (
    <Grid container spacing={2}>
      {uuids.map((uuid) => (
        <Grid item xs={6} md={4} lg={2} key={uuid}>
          <CoinCard uuid={uuid} />
        </Grid>
      ))}
    </Grid>
  );
};
