import { useContext, useMemo } from 'react';
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

import MarketTableRow from './MarketTableRow';
import { useDictionary, useCurrentUserName, useMedia } from '../../hooks';
import { SectionHeading } from '../../components';

export const MarketTable = () => {
  const dictionary = useDictionary();
  const { smUp } = useMedia();
  const market = useCurrentUserName();
  const rows = useMemo(() => market.createTableInfos('rank', 'LOW_TO_HIGH'), [market]);

  return (
    <Box component="div" sx={{ mb: '2rem' }}>
      <SectionHeading>{dictionary.marketHeading}</SectionHeading>

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
              <MarketTableRow key={row.name} {...row} isCollapse={smUp} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
