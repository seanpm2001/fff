import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { RemarkFFFPreset } from './index'

/**
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-hugo/index.js}
 */
export const hugo: RemarkFFFPreset = {
  image: 'images',
  tags: 'category',
  bookmark_of: 'bookmarkOf',
  like_of: 'likeOf',
  repost_of: 'repostOf',
  in_reply_to: 'inReplyTo',
  flags: ({
    flags,
    draft,
    visibility,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
    visibility?: 'public' | 'unlisted' | 'private'
  }) =>
    Array.from(
      new Set([
        ...(flags ?? []),
        ...(draft ? ['draft'] : []),
        ...(visibility ? [visibility] : []),
      ])
    ),
}

/** @see {@link https://hexo.io/docs/front-matter.html} */
export const hexo: RemarkFFFPreset = {
  created: 'date',
  summary: 'excerpt',
  tags: ({
    tags,
    categories,
  }: {
    tags?: FFFFlavoredFrontmatter['tags']
    categories?: (string | string[])[]
  }) => [...(tags ?? []), ...Array.from(new Set((categories ?? []).flat()))],
}

/** @see {@link https://www.getzola.org/documentation/content/page/#front-matter} */
export const zola: RemarkFFFPreset = {
  summary: 'description',
  created: 'date',
  flags: ({
    flags,
    draft,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
  }) => Array.from(new Set([...flags, ...(draft ? ['draft'] : [])])),
}
