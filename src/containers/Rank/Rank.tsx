import { Box } from '@mui/system';
import { useContext } from 'react';

import { CoinCards, SectionHeading } from '../../components';
import { useCurrentUserName, useDictionary } from '../../hooks';

export const Rank = () => {
  const dictionary = useDictionary();
  const market = useCurrentUserName();
  const topSixCoins = market.getTopOrderBy('marketCap', 6);

  return (
    <Box sx={{ mb: '4rem' }}>
      <SectionHeading>{dictionary.topMarket}</SectionHeading>
      <CoinCards uuids={topSixCoins} />
    </Box>
  );
};
