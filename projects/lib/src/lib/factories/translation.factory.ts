export class TranslationFactory {
  static textTransformer = (key: string, transformer: (message: string) => string | undefined): string =>
    key === undefined
      ? ''
      : transformer === undefined
      ? key
      : transformer(key);
}
