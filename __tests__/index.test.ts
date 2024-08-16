import { renderHook } from '@testing-library/react-hooks';
import { vi } from 'vitest';

import { useTranslations } from 'hooks/useTranslations';
import { TranslationContextType } from 'types/translation';

const mockContextValue: TranslationContextType = {
  locale: 'en',
  languages: {
    en: require('./en.json'),
    fr: require('./fr.json'),
    es: require('./es.json'),
    ar: require('./ar.json'),
  },
};

vi.mock('react', async () => {
  const original = (await vi.importActual('react')) as any;
  return {
    ...original,
    useContext: () => mockContextValue,
  };
});

describe('useTranslations hook', () => {
  it('should return the correct translation for the given path and variables', () => {
    const { result } = renderHook(() => useTranslations());

    const translation = result.current.tn('header.title', { date: 'today' });
    expect(translation).toBe('This is the title as of today');
  });

  it('should return the translation path if translation is not found', () => {
    const { result } = renderHook(() => useTranslations());

    const translation = result.current.tn('header.nonexistent');
    expect(translation).toBe('header.nonexistent');
  });

  it('should throw an error if variables are missing for a translation template', () => {
    const { result } = renderHook(() => useTranslations());

    expect(() => result.current.tn('header.title')).toThrow(
      'Translation template string has missing variables',
    );
  });

  it('should handle translations for different locales', () => {
    mockContextValue.locale = 'fr';

    const { result } = renderHook(() => useTranslations());

    const translation = result.current.tn('header.title', {
      date: "aujourd'hui",
    });
    expect(translation).toBe("Ceci est le titre en date de aujourd'hui");

    mockContextValue.locale = 'en';
  });

  it('should handle pluralization correctly', () => {
    const { result } = renderHook(() => useTranslations());

    const singularTranslation = result.current.tn('money.total', { amount: 1 });
    expect(singularTranslation).toBe('I have 1 dollar in my pocket');

    const pluralTranslation = result.current.tn('money.total', { amount: 5 });
    expect(pluralTranslation).toBe('I have 5 dollars in my pockets');
  });

  it('should handle pluralization correctly for French locale', () => {
    mockContextValue.locale = 'fr';
    const { result } = renderHook(() => useTranslations());

    const singularTranslation = result.current.tn('money.total', { amount: 1 });
    expect(singularTranslation).toBe("J'ai 1 dollar dans ma poche");

    const pluralTranslation = result.current.tn('money.total', { amount: 5 });
    expect(pluralTranslation).toBe("J'ai 5 dollars dans mes poches");

    mockContextValue.locale = 'en';
  });

  it('should handle pluralization correctly for Spanish locale', () => {
    mockContextValue.locale = 'es';
    const { result } = renderHook(() => useTranslations());

    const singularTranslation = result.current.tn('money.total', { amount: 1 });
    expect(singularTranslation).toBe('Tengo 1 dólar en mi bolsillo');

    const pluralTranslation = result.current.tn('money.total', { amount: 5 });
    expect(pluralTranslation).toBe('Tengo 5 dólares en mis bolsillos');

    mockContextValue.locale = 'en';
  });

  it('should handle pluralization correctly for Arabic locale', () => {
    mockContextValue.locale = 'ar';
    const { result } = renderHook(() => useTranslations());

    const zeroTranslation = result.current.tn('money.total', { amount: 0 });
    expect(zeroTranslation).toBe('ليس لدي أي دولارات في جيبي');

    const singularTranslation = result.current.tn('money.total', { amount: 1 });
    expect(singularTranslation).toBe('لدي 1 دولار في جيبي');

    const twoTranslation = result.current.tn('money.total', { amount: 2 });
    expect(twoTranslation).toBe('لدي 2 دولارين في جيبي');

    const fewTranslation = result.current.tn('money.total', { amount: 3 });
    expect(fewTranslation).toBe('لدي 3 دولارات قليلة في جيبي');

    const pluralTranslation = result.current.tn('money.total', { amount: 11 });
    expect(pluralTranslation).toBe('لدي 11 دولارات في جيبي');

    mockContextValue.locale = 'en';
  });

  it('should return "Invalid path" if the path results in an object', () => {
    const { result } = renderHook(() => useTranslations());

    const translation = result.current.tn('objectTest.object');

    expect(translation).toBe('Invalid path: objectTest.object');
  });
});
