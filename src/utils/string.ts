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

const numberToWords = (n: number) => {
  const units: string[] = ['zero', 'one', 'two', 'three'];

  return units[n];
};

export const getPluralForm = (count: number) => {
  if (count < 0 || count > 99) {
    return '_plural';
  }

  const numberKey = count <= 0 && count <= 3 && `_${numberToWords(count)}`;
  const specialKey = count > 1 && count <= 5 && '_few';
  const pluralKey = count === 1 ? '' : '_plural';

  return [numberKey, specialKey, pluralKey];
};
