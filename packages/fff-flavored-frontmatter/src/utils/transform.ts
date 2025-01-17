import type { FFFFlavoredFrontmatter } from '../types.ts'

/**
 * FFF Flavor Transform Preset Value
 * @public
 * @typeParam T - Type of input / output Frontmatter. (optional)
 */
export type FFFTransformPresetValue<T extends Record<string, unknown> = Record<string, unknown>> = ((fm: FFFFlavoredFrontmatter & T) => unknown) | string

/**
 * Flavor Transform Preset
 * @public
 * @typeParam T - Type of input / output Frontmatter. (optional)
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#fff-transform-preset}
 */
export type FFFTransformPreset<T extends Record<string, unknown> = Record<string, unknown>> = {
  [key in keyof (FFFFlavoredFrontmatter & T & Record<string, unknown>)]: FFFTransformPresetValue<T & Record<string, unknown>>
}

/**
 * Flavor Transform Function
 * @public
 * @typeParam T - Type of input Frontmatter. (optional)
 * @param fm - Input Frontmatter
 * @param presets - FFFTransformPreset[]
 * @returns FFF Flavored Frontmatter
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#transform-function}
 * @example
 * ```ts
 * import { transform } from 'fff-flavored-frontmatter'
 *
 * const fm = transform({
 *   date: '2022-07-18',
 *   lastmod: '2023-06-04',
 * }, [{
 *   created: 'date',
 *   updated: 'lastmod',
 * }])
 *
 * // { created: '2022-07-18', date: '2022-07-18', lastmod: '2023-06-04', updated: '2023-06-04' }
 * console.log(fm)
 * ```
 */
export const transform = <T extends Record<string, unknown> = Record<string, unknown>>(
  fm: T,
  presets: FFFTransformPreset[],
): FFFFlavoredFrontmatter & T => {
  for (const preset of presets) {
    for (const [output, input] of Object.entries<FFFTransformPresetValue>(preset)) {
      (fm = {
        ...fm,
        [output]:
          (typeof input === 'function' ? input(fm) : fm[input])
            ?? fm[output],
      })
    }
  }
  return fm
}
