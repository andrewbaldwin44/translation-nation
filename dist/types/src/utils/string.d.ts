import { NestedObject, TranslationVariables } from 'context/context-types';
export declare const objectPath: (path: string[], object: NestedObject) => string;
export declare const VARIABLE_STRING_REGEX: RegExp;
export declare const EMPHASIS_STRING_REGEX: RegExp;
export declare const PLURAL_REPLACEMENT_REGEX: RegExp;
export declare const templateString: (template: string, variables: TranslationVariables) => string;
export declare const getPluralForm: (locale: string, count?: number) => string;
