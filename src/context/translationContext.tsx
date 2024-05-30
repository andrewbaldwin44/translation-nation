import { ReactNode, createContext } from 'react';
import { NestedObject, TranslationContextType } from 'context/context-types';

interface ITranslationProvider<Locale, Lang> extends TranslationContextType<Locale, Lang> {
  children: ReactNode;
}

export const TranslationContext = createContext<TranslationContextType>({
  locale: '',
  languages: {},
});

export function TranslationProvider<Locale extends string, Lang extends NestedObject>({
  locale,
  languages,
  children,
}: ITranslationProvider<Locale, Lang>) {
  return (
    <TranslationContext.Provider value={{ languages, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}
