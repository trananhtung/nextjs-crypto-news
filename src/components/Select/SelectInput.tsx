import { FC, ReactNode } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  id: string;
  label: string;
  items: string[] | readonly string[];
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  defaultValue?: string;
}

export const SelectInput: FC<Props> = ({ id, label, items, handleChange, defaultValue }) => {
  return (
    <FormControl sx={{ minWidth: 80 }} color="info" size="small" variant="outlined">
      <InputLabel id={id}>{label}</InputLabel>
      <Select id={id} label="Age" onChange={handleChange}>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
