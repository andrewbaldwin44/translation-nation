export type NestedObject = {
    [key: string]: keyof NestedObject | NestedObject | string;
};
export interface TranslationContextType<Locale = string, Lang = NestedObject> {
    locale: Locale;
    languages: Lang;
}
export type TranslationVariables = Record<string, string | number>;
