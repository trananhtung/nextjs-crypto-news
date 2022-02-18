import { VN_LANGUAGE, EN_LANGUAGE } from '../constants';
import { LanguageDictionary, Language } from '../interfaces';

type MultiLanguage = { [id in Language]: LanguageDictionary };

export const dictionaryByIds: Readonly<MultiLanguage> = {
  en: EN_LANGUAGE,
  vn: VN_LANGUAGE,
};

/**
 * Get language dictionary by language
 */
export const getDictionary = (language: string | undefined, defaultLanguage: Language = 'en') => {
  for (const [key, dictionary] of Object.entries(dictionaryByIds)) {
    if (key === language) {
      return dictionary;
    }
  }

  return dictionaryByIds[defaultLanguage];
};
