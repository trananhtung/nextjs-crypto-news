import numeral from 'numeral';
import millify from 'millify';
import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { If, Then, Else } from 'react-if';

import getCryptoMarket from '../../services/market';
import { Market } from '../../models';
import { DetailChart, SectionHeading, Loader, SelectInput, DetailStack } from '../../components';
import { Error404 } from '../../containers';
import { useDictionary } from '../../hooks';

const TIME_FRAME: readonly string[] = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

const CryptoDetails = () => {
  const dictionary = useDictionary();
  const uuids = useRouter().query.uuid as string;
  const [timePeriod, setTimePeriod] = useState<typeof TIME_FRAME[number]>('24h');

  const { data, error } = useSWR({ uuids, timePeriod }, ({ uuids, timePeriod }) =>
    getCryptoMarket(uuids, timePeriod).then((res) => res.data)
  );

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTimePeriod(event.target.value);
  };

  if (!data) {
    return <Loader />;
  }

  const market = new Market(data);
  const {
    name,
    symbol,
    price,
    listedAt,
    marketCap,
    rank,
    sparkline,
    '24hVolume': volume,
  } = market.getCoinByUuid(uuids);
  const items = [
    { title: dictionary.tableRank, value: rank },
    { title: dictionary.tablePrice, value: `${numeral(price).format('0,000.00')}$` },
    { title: dictionary.tableCap, value: `${millify(marketCap)}$` },
    { title: dictionary.table24hVolume, value: `${millify(volume)}$` },
    { title: dictionary.listAt, value: new Date(listedAt).toLocaleTimeString() },
  ];

  return (
    <If condition={error || data?.data.coins.length === 0}>
      <Then>
        <Error404 />
      </Then>
      <Else>
        <Box sx={{ textAlign: 'right' }}>
          <SelectInput
            id={'time-frame'}
            label={timePeriod}
            items={TIME_FRAME}
            handleChange={handleChange}
          />
        </Box>
        <SectionHeading>{`${name}(${symbol}) Chart`}</SectionHeading>
        <DetailChart points={sparkline || []} />
        <DetailStack items={items} />
      </Else>
    </If>
  );
};

export default CryptoDetails;
