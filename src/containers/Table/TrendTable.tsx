import { useContext } from 'react';

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

import { useDictionary, useCurrentUserName, useMedia } from '../../hooks';
import { SectionHeading } from '../../components';
import TrendTableRow from './TrendTableRow';

const TOP_TEN_TREND = 10;

export const TrendTable = () => {
  const dictionary = useDictionary();
  const { smUp } = useMedia();
  const market = useCurrentUserName();

  const rows = market.createTableInfos('change', 'HIGH_TO_LOW', TOP_TEN_TREND);

  return (
    <Box component="div" sx={{ mb: '2rem' }}>
      <SectionHeading>{dictionary.trend}</SectionHeading>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{dictionary.tableName}</TableCell>
              <TableCell align="right">{dictionary.tablePrice}</TableCell>
              <TableCell align="right">{dictionary.tableChange}</TableCell>
              {smUp && <TableCell align="center">{dictionary.tableChart}</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TrendTableRow {...row} isCollapse={smUp} key={row.uuid} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
