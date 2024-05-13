import { useContext, useCallback } from "react";

import TranslationContext from "context/translationContext";

import {
  objectPath,
  templateString,
  VARIABLE_STRING_REGEX,
} from "utils/string";

export function useTranslations() {
  const { locale, languages } = useContext(TranslationContext);

  const tn = useCallback(
    (path, variables?) => {
      const selectedLanguage = languages[locale];
      let translation = objectPath(path.split("."), selectedLanguage);

      if (!translation) {
        // throw new Error(`Translation at path ${path} not found`);
        return path;
      }

      const hasVariables = VARIABLE_STRING_REGEX.test(translation);
      if (hasVariables && !variables) {
        throw new Error("Translation template string has missing variables");
      }
      if (variables) {
        translation = templateString(translation, variables);
      }

      return translation;
    },
    [locale]
  );

  return { tn };
}
