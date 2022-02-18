import * as React from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { Switch, Box } from '@mui/material';

import enFlag from '../../../assets/flags/uk.png';
import vnFlag from '../../../assets/flags/vn.png';

export const SwitchLanguage = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  // true: vietnam, false: english
  const [checked, setChecked] = React.useState(locale === 'en' ? false : true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    router.push({ pathname, query }, asPath, { locale: checked ? 'en' : 'vn' });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mx: '1rem' }}>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Image src={checked ? vnFlag : enFlag} width={20} height={20} alt="flag" />
    </Box>
  );
};
