export type ObjectLiteral = { [key: string]: any };

export const objectPath = (path: string[], object: ObjectLiteral): any =>
	path.reduce(
		(reducedObject, pathname) => reducedObject?.[pathname],
		object || ""
	);

export const VARIABLE_STRING_REGEX = /\{\{\w+\}\}/;
export const EMPHASIS_STRING_REGEX = /<%- (.*?) %>/g;
export const PLURAL_REPLACEMENT_REGEX = /%s/g;

export const templateString = (
	template: string,
	variables: Record<string, string | number>
): string => {
	return template.replace(
		/\{\{(\w+)\}\}/g,
		(_, variable) => String(variables[variable]) || `{{${variable}}}`
	);
};

export const getPluralForm = (count: number, locale: string): string => {
	switch (locale) {
		case "en":
			return count === 1 ? "" : "_plural";
		case "fr":
			return count > 1 ? "_plural" : "";
		case "es":
			return count === 1 ? "" : "_plural";
		default:
			// Default to English rules if locale is not specified
			return count === 1 ? "" : "_plural";
	}
};
