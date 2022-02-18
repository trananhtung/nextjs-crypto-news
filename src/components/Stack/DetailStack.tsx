import { FC } from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';

interface Props {
  items: { title: string; value: string | number }[];
}

export const DetailStack: FC<Props> = ({ items }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
        {items.map((item, index) => (
          <Typography variant="caption" key={index}>{`${item.title}: ${item.value}`}</Typography>
        ))}
      </Stack>
    </Box>
  );
};
