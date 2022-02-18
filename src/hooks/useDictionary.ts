import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { getDictionary } from '../helper';

export const useDictionary = () => {
  const { locale } = useRouter();
  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  return dictionary;
};
