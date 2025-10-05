/**
 * Translation utilities for i18n support
 */

import type { TranslationKey, TranslationFunction as TypedTranslationFunction } from '../_data/i18n/types';

// Export both typed and untyped versions for compatibility
export type TranslationFunction = TypedTranslationFunction | ((key: string) => string);

/**
 * Creates a default translation function that returns the key if no translation is provided
 */
export const createDefaultT = (): TranslationFunction => {
  return (key: string) => key;
};

/**
 * Interface for components that accept a translation function
 */
export interface WithTranslation {
  t?: TranslationFunction;
}

/**
 * Creates a namespaced translation function
 * @param namespace - The namespace prefix (e.g., 'brutal-truth')
 * @param t - The translation function
 * @returns A function that prepends the namespace to keys
 *
 * @example
 * const nt = createNamespace('brutal-truth', t);
 * nt('title') // translates 'brutal-truth.title'
 */
export const createNamespace = (namespace: string, t: TranslationFunction): TranslationFunction => {
  return (key: string) => t(`${namespace}.${key}`);
};

/**
 * Higher-order component that provides a default translation function
 */
export const withDefaultT = <P extends WithTranslation>(
  Component: React.FC<P>
): React.FC<P> => {
  return (props: P) => {
    const t = props.t || createDefaultT();
    return <Component {...props} t={t} />;
  };
};
