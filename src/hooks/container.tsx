import { TranslationProvider } from 'index';

type Props = {
  defaultLanguage: string;
  children: React.ReactNode;
  locale: string;
  languages: any;
};

export function TranslationContainer({ locale, languages, children }: Props) {
  console.log({ locale, languages });
  return <TranslationProvider value={{ languages, locale }}>{children}</TranslationProvider>;
}
