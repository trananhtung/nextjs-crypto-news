const definitions = [
  'home',
  'market',
  'news',
  'watchList',

  'login',
  'logout',

  'trend',
  'topMarket',

  'tableRank',
  'tableName',
  'tablePrice',
  'tableChange',
  'tableCap',
  'table24hVolume',
  'tableChart',

  'marketHeading',

  'heroTitle',
  'heroSubtitle',
  'heroButton',

  'listAt',
  'watchListHeading',
] as const;

export const languages = ['vn', 'en'] as const;

export type Definition = typeof definitions[number];

export type LanguageDictionary = {
  [definition in Definition]: string;
};

export type Language = typeof languages[number];
