/** @param {Record<string, boolean | undefined | null>} map */
export function classNames(map) {
  return Object.entries(map)
    .filter(([, v]) => Boolean(v))
    .map(([k]) => k)
    .join(' ')
}
