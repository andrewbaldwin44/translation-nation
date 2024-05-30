export type NestedObject = {
  [key: string]: string | NestedObject;
};

export interface TranslationContextType<Locale = string, Lang = NestedObject> {
  locale: Locale;
  languages: Lang;
}

export type TranslationVariables = Record<string, string | number>;
