import { FC, useContext } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import numeral from 'numeral';
import millify from 'millify';

import { useCurrentUserName } from '../../hooks';
import { CoinByUuids } from '../../interfaces';

interface Props {
  uuid: keyof CoinByUuids;
}

export const CoinCard: FC<Props> = ({ uuid }) => {
  const market = useCurrentUserName();
  const coin = market.getCoinByUuid(uuid);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Image src={coin.iconUrl} alt={coin.name} width={30} height={30} />
        {coin.symbol}
        <Typography variant="caption" color={coin.change > 0 ? 'success.main' : 'error.main'}>
          {coin.change}%
        </Typography>
      </Typography>

      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ArrowRightRoundedIcon />
        {numeral(coin.price).format('0,000.00')}$
      </Typography>

      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
        <ArrowRightRoundedIcon />
        {millify(coin.marketCap, {
          precision: 1,
        })}
      </Typography>
    </Box>
  );
};
