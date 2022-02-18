import { renderHook, act } from '@testing-library/react-hooks';
import { Language } from '../interfaces';
import { getDictionary, dictionaryByIds } from './translate';

it('should return correct dictionary', () => {
  const languages: Language[] = ['en', 'vn'];

  languages.forEach((language) => {
    expect(getDictionary(language)).toEqual(dictionaryByIds[language]);
  });
});

it('should return default when input is undefined', () => {
  expect(getDictionary(undefined, 'en')).toEqual(dictionaryByIds.en);
});
