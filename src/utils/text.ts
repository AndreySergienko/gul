/**
 * Удалить слэш с конца строка
 */
export const sliceLastSlash = (string: string): string => {
  if (!string) return ''

  if (string[string.length - 1] === '/') {
    return string.slice(0, -1)
  }
  return string
}
