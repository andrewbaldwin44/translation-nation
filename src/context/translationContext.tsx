export type Locale = string;
export type Languages = string[];

import { createContext } from 'react';
import { TranslationContextType } from '../types/translation';

type NestedObject = {
  [key: string]: string | NestedObject;
};

interface ITranslationProvider {
  locale: string;
  languages: { [key: string]: NestedObject };
  children: React.ReactNode;
}

export const TranslationContext = createContext<TranslationContextType>({
  locale: 'en',
  languages: {},
});

export function TranslationProvider({ locale, languages, children }: ITranslationProvider) {
  return (
    <TranslationContext.Provider value={{ languages, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}
