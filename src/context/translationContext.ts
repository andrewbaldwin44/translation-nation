import { createContext } from "react";

export type Locale = string;
export type Languages = string[];

export interface ITranslationContext {
  locale: Locale;
  languages: Languages;
}

const TranslationContext = createContext<ITranslationContext>();

export default TranslationContext;
