export type ObjectLiteral = { [key: string]: any };

export const objectPath = (path: string[], object: ObjectLiteral): any =>
  path.reduce(
    (reducedObject, pathname) => reducedObject?.[pathname],
    object || ""
  );

export const VARIABLE_STRING_REGEX = /<%= (.*?) %>/g;
export const EMPHASIS_STRING_REGEX = /<%- (.*?) %>/g;
export const PLURAL_REPLACEMENT_REGEX = /%s/g;

export const templateString = (
  string: string,
  variables: ObjectLiteral
): string =>
  string.replace(
    VARIABLE_STRING_REGEX,
    (match) => variables[match.replace(/<%= /g, "").replace(/ %>/g, "")]
  );
