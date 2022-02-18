import { memo } from 'react';
import Link from 'next/link';
import { FC } from 'react';
import numeral from 'numeral';
import Image from 'next/image';
import { TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { When } from 'react-if';

import { TableInfo } from '../../interfaces';
import { SimpleChart } from '../../components';

const TrendTableRow: FC<TableInfo & { isCollapse: boolean }> = ({
  uuid,
  iconUrl,
  name,
  symbol,
  price,
  change,
  sparkline,
  isCollapse,
}) => {
  return (
    <TableRow hover>
      <TableCell>
        <Link passHref href={`/market/${uuid}`}>
          <Box
            component="a"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Image src={iconUrl} alt={name} width={25} height={25} />
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              {symbol}
            </Typography>
            <When condition={isCollapse}>
              <Typography variant="caption" color="gray" sx={{ fontWeight: 500 }}>
                {name}
              </Typography>
            </When>
          </Box>
        </Link>
      </TableCell>
      <TableCell align="right"> {numeral(price).format('0,000.00')}$</TableCell>
      <TableCell align="right">
        <Typography variant="inherit" color={change > 0 ? 'success.main' : 'error.main'}>
          {change > 0 ? '+' : ''}
          {change}%
        </Typography>
      </TableCell>
      <When condition={isCollapse}>
        <TableCell
          align="center"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: '200px' }}>
            <SimpleChart points={sparkline} />
          </Box>
        </TableCell>
      </When>
    </TableRow>
  );
};

export default memo(TrendTableRow);
