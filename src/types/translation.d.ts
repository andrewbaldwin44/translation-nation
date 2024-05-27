export interface TranslationContextType {
	locale: string;
	languages: Record<string, Record<string, any>>;
}

export type TranslationVariables = Record<string, string | number>;
