import { useContext, useCallback } from 'react';

import { NestedObject } from 'context/context-types';
import { TranslationContext } from 'context/translationContext';
import { TranslationVariables, TranslationContextType } from 'types/translation';
import { objectPath, templateString, VARIABLE_STRING_REGEX, getPluralForm } from 'utils/string';

export function useTranslations() {
  const { locale, languages } = useContext<TranslationContextType>(TranslationContext);

  const tn = useCallback(
    (path: string, variables?: TranslationVariables): string => {
      const selectedLanguage = languages[locale] as NestedObject;

      const amount = variables?.amount !== undefined ? Number(variables.amount) : undefined;

      // Determine if a plural form is needed
      const pluralPath = path + getPluralForm(locale, amount);
      let translation: string | undefined = objectPath(pluralPath.split('.'), selectedLanguage);

      // Fallback to singular if plural not found
      if (!translation) {
        translation = objectPath(path.split('.'), selectedLanguage);
      }

      if (!translation) {
        // eslint-disable-next-line no-console
        console.log(`Translation not found for path: ${path}`);
        return path;
      }

      if (typeof translation === 'object') {
        // eslint-disable-next-line no-console
        console.log(`Translation for path ${path} is an object, which is invalid`);
        return `Invalid path: ${path}`;
      }

      const hasVariables = VARIABLE_STRING_REGEX.test(translation);
      if (hasVariables && !variables) {
        throw new Error('Translation template string has missing variables');
      }
      if (variables) {
        translation = templateString(translation, variables);
      }

      return translation;
    },
    [locale, languages],
  );

  return { tn };
}
