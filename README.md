# Translation Nation

translation nation is a simple and easy to use hook for managing translations within your app

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


👤 **Andrew Baldwin**

- Github: [@andrewbaldwin44](https://github.com/andrewbaldwin44)

👤 **Kolby McKeown**

- Github: [@kolbymckeown](https://github.com/kolbymckeown)
