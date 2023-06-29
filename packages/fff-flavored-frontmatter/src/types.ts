/// <reference lib="dom" />

/**
 * Optional Type Util
 * @public
 * @typeParam T - whether to support optional types
 * - undefined: all available
 * - true: only optional types are supported
 * - false: optional types are not supported
 */
export type FFFOptionalType<T extends (boolean | undefined), Required, Optional> =
  T extends undefined
    ? Required | Optional
    : T extends true
      ? Optional
      : Required

/**
 * Object Image
 * @public
 */
export type FFFImage = Partial<HTMLImageElement> & {
  sources?: Partial<HTMLSourceElement>[]
  figcaption?: string
}

/**
 * Object Audio
 * @public
 */
export type FFFAudio = Partial<HTMLAudioElement> & {
  sources?: Partial<HTMLSourceElement>[]
}

/**
 * Object Video
 * @public
 */
export type FFFVideo = Partial<HTMLVideoElement> & {
  sources?: Partial<HTMLSourceElement>[]
}

/**
 * Author
 * @public
 */
export type FFFAuthor = {
  /** the author's name. */
  name?: string
  /** the URL of a site owned by the author. */
  url?: string
  /** the URL for an image for the author. */
  avatar?: string
}

/**
 * Base Variables
 * @public
 */
export type FFFBase = {
  /** the title of article, non-article posts may omit titles. */
  title?: string
  /** plain text sentence or two describing the post. */
  summary?: string
  /** tags array, any plain text values you want. */
  tags?: string[]
  /** categories array, any plain text values you want. */
  categories?: string[]
  /** flags array, any plain text values you want. */
  flags?: string[]
}

/**
 * DateTime Vaeriables
 * @public
 */
export type FFFDateTime = {
  /** the created date of the post. */
  created?: string
  /** the updated date of the post. */
  updated?: string
  /** the published date of the post. */
  published?: string
  /** datetime the event starts. */
  start?: string
  /** datetime the event ends. */
  end?: string
}

/**
 * Media Variables
 * @public
 * @typeParam T - whether to support optional types
 * - undefined: all available
 * - true: only optional types are supported
 * - false: optional types are not supported
 */
export type FFFMedia<T extends (boolean | undefined) = undefined> = {
  /** the main image for article or photo post. */
  image?: FFFOptionalType<T, string, FFFImage>
  /** the image for multi-photo post. */
  images?: FFFOptionalType<T, string[], FFFImage[]>
  /** the main audio for audio post. */
  audio?: FFFOptionalType<T, string, FFFAudio>
  /** the main video for video post. */
  video?: FFFOptionalType<T, string, FFFVideo>
  /** image alternate text. */
  alt?: T extends true ? never : string
}

/**
 * Mention Variables
 * @public
 */
export type FFFMention = {
  /** indicates this post is a bookmark of another URL. */
  bookmark_of?: string
  /** the URL which the post is considered a "like" (favorite, star) of. */
  like_of?: string
  /** the URL which the post is considered a "repost" of. */
  repost_of?: string
  /** URL which the post is considered reply to. */
  in_reply_to?: string
}

/**
 * Extra Variables
 * @public
 */
export type FFFExtra = {
  /** specifies one or more post authors. */
  authors?: FFFAuthor[]
  /** the primary language for the post. */
  lang?: string | string[]
  /** location the post was posted from. */
  location?: string
  /** URL(s) of syndicated copies of this post. */
  syndication?: string | string[]
  /** the URL of the venue/location h-card which the h-entry is considered a "checkin" of. */
  checkin?: string
  /** a reply to an event that says whether the sender is attending. */
  rsvp?: 'yes' | 'no' | 'maybe' | 'interested'
}

/**
 * Type definition of the {@link https://fff.js.org | FFF Flavored Frontmatter}.
 * @public
 * @typeParam T - whether to support optional types
 * - undefined: all available
 * - true: only optional types are supported
 * - false: optional types are not supported
 */
export type FFFFlavoredFrontmatter<T extends (boolean | undefined) = undefined> = FFFBase &
  FFFDateTime &
  FFFMedia<T> &
  FFFMention &
  FFFExtra
