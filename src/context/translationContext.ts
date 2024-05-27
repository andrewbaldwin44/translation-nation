export type Locale = string;
export type Languages = string[];

import { createContext } from 'react';
import { TranslationContextType } from '../types/translation';

export const TranslationContext = createContext<TranslationContextType>({
  locale: 'en',
  languages: {},
});

export const TranslationProvider = TranslationContext.Provider;
