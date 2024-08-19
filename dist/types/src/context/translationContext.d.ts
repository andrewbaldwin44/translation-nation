import { ReactNode } from '../react';
import { NestedObject, TranslationContextType } from 'context/context-types';
interface ITranslationProvider<Locale, Lang> extends TranslationContextType<Locale, Lang> {
    children: ReactNode;
}
export declare const TranslationContext: import('../react').Context<TranslationContextType<string, NestedObject>>;
export declare function TranslationProvider<Locale extends string, Lang extends NestedObject>({ locale, languages, children, }: ITranslationProvider<Locale, Lang>): import("react").JSX.Element;
export {};
