# Translation Nation

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/andrewbaldwin44/translation-nation/blob/master/LICENSE.md)
[![Build Status](https://github.com/andrewbaldwin44/translation-nation/workflows/Tests/badge.svg)](https://github.com/andrewbaldwin44/translation-nation/actions?query=workflow%3ATests)
[![npm version](https://img.shields.io/npm/v/translation-nation.svg?style=flat)](https://www.npmjs.com/package/translation-nation)

Translation nation is a simple and easy to use hook for managing translations within your app

### How to Use

1. Wrap your entire app in the Translation Provider and pass the current locale with supported languages:
```javascript
    <TranslationProvider
        locale="en"
        languages={{
            en: {
                "hello": "world"
            }
        }}
    >
        <App />
    </TranslationProvider>
```
2. Now you can use the translation hook anywhere within your app!
```javascript
function HelloWorld() {
  const { tn } = useTranslations();

  return (
    <div>
      <span>{tn("hello")}</span>
    </div>
  );
}
```

### Authors

- [Andrew Baldwin](https://github.com/andrewbaldwin44)
- [Kolby McKeown](https://github.com/kolbymckeown)

### License
Open source licensed under the MIT license (see LICENSE file for details).
