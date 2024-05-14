export type Locale = string;
export type Languages = string[];

import { createContext } from "react";
import { TranslationContextType } from "../types/translation";

const TranslationContext = createContext<TranslationContextType>({
	locale: "en",
	languages: {},
});

export default TranslationContext;
