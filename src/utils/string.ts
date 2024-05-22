export type ObjectLiteral = { [key: string]: any };

export const objectPath = (path: string[], object: ObjectLiteral): any =>
  path.reduce((reducedObject, pathname) => reducedObject?.[pathname], object || '');

export const VARIABLE_STRING_REGEX = /\{\{\w+\}\}/;
export const EMPHASIS_STRING_REGEX = /<%- (.*?) %>/g;
export const PLURAL_REPLACEMENT_REGEX = /%s/g;

export const templateString = (
  template: string,
  variables: Record<string, string | number>,
): string => {
  return template.replace(
    /\{\{(\w+)\}\}/g,
    (_, variable) => String(variables[variable]) || `{{${variable}}}`,
  );
};

const pluralRules: { [key: string]: (count: number) => string } = {
  // English
  en: (count: number) => {
    if (count === 1) return '';
    return '_plural';
  },
  es: (count: number) => {
    if (count === 1) return '';
    return '_plural';
  },
  fr: (count: number) => {
    if (count === 1) return '';
    return '_plural';
  },
  // Arabic
  ar: (count: number) => {
    if (count === 0) return '_zero';
    if (count === 1) return '';
    if (count === 2) return '_two';
    if (count >= 3 && count <= 10) return '_few';
    return '_plural';
  },
  // Add more rules for other languages here...
};

export const getPluralForm = (count: number, locale: string): string => {
  const rule = pluralRules[locale];
  if (rule) {
    return rule(count);
  }
  return count === 1 ? '' : '_plural';
};
