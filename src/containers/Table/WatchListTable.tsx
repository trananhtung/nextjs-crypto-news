import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Box } from '@mui/system';
import { When } from 'react-if';

import WatchListTableRow from './WatchListTableRow';
import { useDictionary, useMedia } from '../../hooks';
import { SectionHeading } from '../../components';
import Router from 'next/router';
import { getWatchList } from '../../helper';
import getCryptoMarket from '../../services/market';
import { Market } from '../../models';
import { TableInfo } from '../../interfaces';

export const WatchListTable = () => {
  const { data: session } = useSession();
  const dictionary = useDictionary();
  const { smUp } = useMedia();

  const [rows, setRows] = useState<TableInfo[]>([]);

  useEffect(() => {
    if (!session) {
      Router.push('/auth');
    }

    const getRows = async (username: string) => {
      const watchList = await getWatchList(username);

      const response = await getCryptoMarket();
      const marketProps = (await response).data;
      const market = new Market(marketProps);

      const rows = market
        .createTableInfos('rank', 'LOW_TO_HIGH')
        .filter((row) => watchList.includes(row.uuid));

      setRows(rows);
    };

    const username = session?.user?.name;

    if (username) {
      getRows(username);
    }
  }, [session, session?.user?.name]);

  if (!session) {
    return <></>;
  }

  return (
    <Box component="div" sx={{ mb: '2rem' }}>
      <SectionHeading>{dictionary.watchListHeading}</SectionHeading>

      <TableContainer component={Paper}>
        <Table>
          {/* Head */}
          <TableHead>
            <TableRow>
              <TableCell align="left"> </TableCell>
              <TableCell align="left">{dictionary.tableRank}</TableCell>
              <TableCell align="left">{dictionary.tableName}</TableCell>
              <TableCell align="right">{dictionary.tablePrice}</TableCell>
              <TableCell align="right">{dictionary.tableChange}</TableCell>
              <When condition={smUp}>
                <TableCell align="right">{dictionary.tableCap}</TableCell>
              </When>
              <When condition={smUp}>
                <TableCell align="right">{dictionary.table24hVolume}</TableCell>
              </When>
            </TableRow>
          </TableHead>
          {/* Body */}
          <TableBody>
            {rows.map((row) => (
              <WatchListTableRow key={row.name} {...row} isCollapse={smUp} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
