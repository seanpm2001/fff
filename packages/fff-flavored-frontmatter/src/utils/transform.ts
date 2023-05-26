import type { FFFFlavoredFrontmatter } from '../types'

/**
 * FFF Flavor Transform Preset Value
 * @public
 */
export type FFFTransformPresetValue<T extends Record<string, unknown> = Record<string, unknown>> = string | ((fm: FFFFlavoredFrontmatter & T) => unknown)

/**
 * Flavor Transform Preset
 * @public
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#fff-transform-preset}
 */
export type FFFTransformPreset<T extends Record<string, unknown> = Record<string, unknown>> = {
  [key in keyof FFFFlavoredFrontmatter]: FFFTransformPresetValue<T & Record<string, unknown>>
}

/**
 * Flavor Transform Preset (Reverse)
 * @public
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#reverse}
 */
export type FFFTransformPresetReverse<T extends Record<string, unknown> = Record<string, unknown>> = {
  [key in keyof (T & Record<string, unknown>)]: FFFTransformPresetValue<T & Record<string, unknown>>
}

/**
 * Flavor Transform Function
 * @public
 * @param fm - Input Frontmatter
 * @param presets - FFFTransformPreset Array
 * @returns - FFF Flavored Frontmatter
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#transform-function}
 */
export const transform = (
  fm: FFFFlavoredFrontmatter & { [key: string]: unknown },
  presets: (FFFTransformPreset | FFFTransformPresetReverse)[],
): FFFFlavoredFrontmatter & { [key: string]: unknown } => {
  for (const preset of presets) {
    for (const [output, input] of Object.entries<FFFTransformPresetValue>(preset)) {
      (fm = {
        ...fm,
        [output]:
            typeof input === 'function' ? input(fm) : fm[input] ?? fm[output],
      })
    }
  }
  return fm
}
